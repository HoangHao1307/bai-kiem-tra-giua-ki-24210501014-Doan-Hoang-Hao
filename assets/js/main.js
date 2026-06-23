/* =========================================================
   main.js
   Toàn bộ logic JavaScript thuần cho website PLUGGED:
   - Render danh sách sự kiện từ mảng events (data.js)
   - Tìm kiếm theo tên, lọc theo danh mục / cấp độ
   - Hiển thị chi tiết bằng Bootstrap Modal
   - Validation form đăng ký
   - Lưu / đọc / xóa đăng ký bằng LocalStorage
   File này được dùng chung cho mọi trang, mỗi hàm tự kiểm
   tra xem phần tử cần thiết có tồn tại trên trang hay không
   trước khi chạy.
   ========================================================= */

const STORAGE_KEY = "plugged_registrations";

/* ---------- Helpers chung ---------- */

function formatDate(isoDate) {
  const d = new Date(isoDate + "T00:00:00");
  return d.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function getEventById(id) {
  return events.find((e) => e.id === Number(id));
}

function levelBadgeClass(level) {
  return level === "Advanced" ? "badge-amber" : "badge-volt";
}

/* ---------- LocalStorage: đăng ký ---------- */

function getRegistrations() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Không đọc được LocalStorage:", e);
    return [];
  }
}

function saveRegistration(reg) {
  const list = getRegistrations();
  list.push(reg);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function deleteRegistration(regId) {
  const list = getRegistrations().filter((r) => r.id !== regId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function clearRegistrations() {
  localStorage.removeItem(STORAGE_KEY);
}

/* =========================================================
   1. TRANG CHỦ (index.html) - sự kiện nổi bật
   ========================================================= */

function renderFeaturedEvents() {
  const wrap = document.getElementById("featuredEvents");
  if (!wrap) return;

  const featured = events.slice(0, 4);
  wrap.innerHTML = featured.map((ev) => eventCardTemplate(ev)).join("");
  attachCardEvents(wrap);
}

/* =========================================================
   2. TRANG DANH SÁCH (courses.html)
   ========================================================= */

let activeFilters = { keyword: "", category: "all", level: "all" };

function populateFilterOptions() {
  const catSelect = document.getElementById("filterCategory");
  const lvlSelect = document.getElementById("filterLevel");
  if (!catSelect || !lvlSelect) return;

  const categories = [...new Set(events.map((e) => e.category))];
  const levels = [...new Set(events.map((e) => e.level))];

  categories.forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    catSelect.appendChild(opt);
  });
  levels.forEach((l) => {
    const opt = document.createElement("option");
    opt.value = l;
    opt.textContent = l;
    lvlSelect.appendChild(opt);
  });
}

function applyFilters() {
  return events.filter((ev) => {
    const matchKeyword = ev.title.toLowerCase().includes(activeFilters.keyword.toLowerCase());
    const matchCategory = activeFilters.category === "all" || ev.category === activeFilters.category;
    const matchLevel = activeFilters.level === "all" || ev.level === activeFilters.level;
    return matchKeyword && matchCategory && matchLevel;
  });
}

function renderEventList() {
  const wrap = document.getElementById("eventList");
  if (!wrap) return;

  const filtered = applyFilters();
  const emptyState = document.getElementById("emptyState");

  if (filtered.length === 0) {
    wrap.innerHTML = "";
    if (emptyState) emptyState.classList.remove("d-none");
    return;
  }
  if (emptyState) emptyState.classList.add("d-none");

  wrap.innerHTML = filtered.map((ev) => eventCardTemplate(ev)).join("");
  attachCardEvents(wrap);
}

function initEventListPage() {
  const wrap = document.getElementById("eventList");
  if (!wrap) return;

  populateFilterOptions();
  renderEventList();

  const searchInput = document.getElementById("searchInput");
  const catSelect = document.getElementById("filterCategory");
  const lvlSelect = document.getElementById("filterLevel");
  const resetBtn = document.getElementById("resetFilterBtn");

  searchInput.addEventListener("input", (e) => {
    activeFilters.keyword = e.target.value;
    renderEventList();
  });
  catSelect.addEventListener("change", (e) => {
    activeFilters.category = e.target.value;
    renderEventList();
  });
  lvlSelect.addEventListener("change", (e) => {
    activeFilters.level = e.target.value;
    renderEventList();
  });
  resetBtn.addEventListener("click", () => {
    activeFilters = { keyword: "", category: "all", level: "all" };
    searchInput.value = "";
    catSelect.value = "all";
    lvlSelect.value = "all";
    renderEventList();
  });

  // Nếu courses.html được mở kèm ?category=Workshop từ trang chủ
  const params = new URLSearchParams(window.location.search);
  const presetCategory = params.get("category");
  if (presetCategory) {
    activeFilters.category = presetCategory;
    catSelect.value = presetCategory;
    renderEventList();
  }
}

/* ---------- Card template + sự kiện gắn cho nút trong card ---------- */

function eventCardTemplate(ev) {
  return `
    <div class="col-sm-6 col-lg-3">
      <div class="ticket-card">
        <img src="${ev.image}" class="ticket-img" alt="${ev.title}">
        <div class="ticket-body">
          <div class="d-flex justify-content-between align-items-start gap-2">
            <span class="badge ${levelBadgeClass(ev.level)}">${ev.level}</span>
            <span class="ticket-date">${formatDate(ev.date)}</span>
          </div>
          <h5>${ev.title}</h5>
          <p class="desc">${ev.description}</p>
          <div class="ticket-perforation"></div>
          <div class="ticket-actions">
            <button class="btn btn-outline-volt btn-sm flex-fill btn-detail" data-id="${ev.id}">Xem chi tiết</button>
            <button class="btn btn-volt btn-sm flex-fill btn-register" data-id="${ev.id}">Đăng ký</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function attachCardEvents(container) {
  container.querySelectorAll(".btn-detail").forEach((btn) => {
    btn.addEventListener("click", () => showEventModal(btn.dataset.id));
  });
  container.querySelectorAll(".btn-register").forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = `register.html?eventId=${btn.dataset.id}`;
    });
  });
}

/* =========================================================
   3. MODAL CHI TIẾT (Bootstrap Modal dùng chung)
   ========================================================= */

function showEventModal(id) {
  const ev = getEventById(id);
  if (!ev) return;

  document.getElementById("modalTitle").textContent = ev.title;
  document.getElementById("modalImage").src = ev.image;
  document.getElementById("modalImage").alt = ev.title;
  document.getElementById("modalCategory").textContent = ev.category;
  document.getElementById("modalLevel").textContent = ev.level;
  document.getElementById("modalDate").textContent = formatDate(ev.date);
  document.getElementById("modalDetail").textContent = ev.detail;

  const registerBtn = document.getElementById("modalRegisterBtn");
  registerBtn.href = `register.html?eventId=${ev.id}`;

  const modalEl = document.getElementById("eventDetailModal");
  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

/* =========================================================
   4. TRANG ĐĂNG KÝ (register.html)
   ========================================================= */

function populateEventSelect() {
  const select = document.getElementById("eventSelect");
  if (!select) return;

  events.forEach((ev) => {
    const opt = document.createElement("option");
    opt.value = ev.id;
    opt.textContent = `${ev.title} (${formatDate(ev.date)})`;
    select.appendChild(opt);
  });

  const params = new URLSearchParams(window.location.search);
  const presetId = params.get("eventId");
  if (presetId) select.value = presetId;
}

function showFieldError(inputEl, message) {
  inputEl.classList.add("is-invalid-custom");
  const feedback = document.getElementById(inputEl.dataset.feedback);
  if (feedback) {
    feedback.textContent = message;
    feedback.classList.add("show");
  }
}

function clearFieldError(inputEl) {
  inputEl.classList.remove("is-invalid-custom");
  const feedback = document.getElementById(inputEl.dataset.feedback);
  if (feedback) feedback.classList.remove("show");
}

function validateRegisterForm(form) {
  let isValid = true;

  const fullName = form.fullName;
  const email = form.email;
  const phone = form.phone;
  const className = form.className;
  const eventSelect = form.eventSelect;

  [fullName, email, phone, className, eventSelect].forEach(clearFieldError);

  if (fullName.value.trim().length < 3) {
    showFieldError(fullName, "Họ và tên không được rỗng và phải từ 3 ký tự trở lên.");
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
    showFieldError(email, "Email không được rỗng và phải đúng định dạng (ví dụ: ten@example.com).");
    isValid = false;
  }

  const phonePattern = /^[0-9]{9,11}$/;
  if (!phonePattern.test(phone.value.trim())) {
    showFieldError(phone, "Số điện thoại chỉ gồm chữ số, từ 9 đến 11 chữ số.");
    isValid = false;
  }

  if (!className.value.trim()) {
    showFieldError(className, "Lớp không được rỗng.");
    isValid = false;
  }

  if (!eventSelect.value) {
    showFieldError(eventSelect, "Vui lòng chọn một sự kiện/khóa học.");
    isValid = false;
  }

  return isValid;
}

function initRegisterPage() {
  const form = document.getElementById("registerForm");
  if (!form) return;

  populateEventSelect();

  const successBox = document.getElementById("registerSuccess");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validateRegisterForm(form)) {
      successBox.classList.add("d-none");
      return;
    }

    const ev = getEventById(form.eventSelect.value);
    const registration = {
      id: "REG-" + Date.now(),
      fullName: form.fullName.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      className: form.className.value.trim(),
      eventId: ev.id,
      eventTitle: ev.title,
      note: form.note.value.trim(),
      registeredAt: new Date().toISOString()
    };

    saveRegistration(registration);

    successBox.textContent = `Đăng ký thành công cho sự kiện "${ev.title}"! Bạn có thể xem lại tại trang Danh sách đăng ký.`;
    successBox.classList.remove("d-none");
    form.reset();
    populateEventSelect();
  });
}

/* =========================================================
   5. TRANG DANH SÁCH ĐĂNG KÝ (registrations.html)
   ========================================================= */

function renderRegistrations() {
  const tbody = document.getElementById("registrationsBody");
  if (!tbody) return;

  const list = getRegistrations();
  const emptyState = document.getElementById("registrationsEmpty");
  const clearAllBtn = document.getElementById("clearAllBtn");

  if (list.length === 0) {
    tbody.innerHTML = "";
    if (emptyState) emptyState.classList.remove("d-none");
    if (clearAllBtn) clearAllBtn.classList.add("d-none");
    return;
  }

  if (emptyState) emptyState.classList.add("d-none");
  if (clearAllBtn) clearAllBtn.classList.remove("d-none");

  tbody.innerHTML = list
    .map(
      (r) => `
      <tr>
        <td>${r.fullName}</td>
        <td>${r.email}</td>
        <td>${r.phone}</td>
        <td>${r.className}</td>
        <td>${r.eventTitle}</td>
        <td>${r.note ? r.note : "<span class='text-muted-custom'>—</span>"}</td>
        <td class="text-end">
          <button class="btn btn-sm btn-outline-volt btn-delete-reg" data-id="${r.id}">Xóa</button>
        </td>
      </tr>
    `
    )
    .join("");

  tbody.querySelectorAll(".btn-delete-reg").forEach((btn) => {
    btn.addEventListener("click", () => {
      deleteRegistration(btn.dataset.id);
      renderRegistrations();
    });
  });
}

function initRegistrationsPage() {
  const tbody = document.getElementById("registrationsBody");
  if (!tbody) return;

  renderRegistrations();

  const clearAllBtn = document.getElementById("clearAllBtn");
  if (clearAllBtn) {
    clearAllBtn.addEventListener("click", () => {
      if (confirm("Xóa toàn bộ danh sách đăng ký? Hành động này không thể hoàn tác.")) {
        clearRegistrations();
        renderRegistrations();
      }
    });
  }
}

/* =========================================================
   Khởi chạy khi DOM sẵn sàng
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedEvents();
  initEventListPage();
  initRegisterPage();
  initRegistrationsPage();
});
