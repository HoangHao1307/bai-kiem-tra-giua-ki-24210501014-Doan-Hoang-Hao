// =============================================
// UTILITY FUNCTIONS
// =============================================

function getCategoryIcon(cat) {
  const icons = { Frontend: '💻', Backend: '⚙️', DevOps: '🔧', Design: '🎨', Security: '🔒', AI: '🤖' };
  return icons[cat] || '📌';
}
function getLevelColor(level) {
  return { Beginner: 'success', Intermediate: 'warning', Advanced: 'danger' }[level] || 'secondary';
}
function formatDate(d) {
  const dt = new Date(d);
  return dt.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

// =============================================
// LOCALSTORAGE
// =============================================
function getRegistrations() {
  return JSON.parse(localStorage.getItem('techfest_registrations') || '[]');
}
function saveRegistrations(list) {
  localStorage.setItem('techfest_registrations', JSON.stringify(list));
}

// =============================================
// INDEX PAGE — FEATURED EVENTS
// =============================================
function renderFeaturedEvents() {
  const container = document.getElementById('featured-events');
  if (!container) return;
  const featured = events.slice(0, 3);
  container.innerHTML = featured.map(e => buildCard(e, true)).join('');
}

// =============================================
// COURSES PAGE — FULL LIST + SEARCH/FILTER
// =============================================
let currentFiltered = [...events];

function renderEventCards(list) {
  const container = document.getElementById('events-container');
  const noResult = document.getElementById('no-result');
  if (!container) return;
  if (list.length === 0) {
    container.innerHTML = '';
    if (noResult) noResult.classList.remove('d-none');
    return;
  }
  if (noResult) noResult.classList.add('d-none');
  container.innerHTML = list.map(e => buildCard(e, false)).join('');
}

function buildCard(e, featured) {
  return `
  <div class="col-lg-4 col-md-6 mb-4">
    <div class="card event-card h-100 shadow-sm">
      <div class="card-img-wrapper">
        <img src="${e.image}" alt="${e.title}" class="card-img-top event-img" onerror="this.src='assets/images/placeholder.svg'">
        <span class="badge badge-category">${getCategoryIcon(e.category)} ${e.category}</span>
      </div>
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${e.title}</h5>
        <p class="card-text text-muted small flex-grow-1">${e.description}</p>
        <div class="d-flex justify-content-between align-items-center mb-3">
          <span class="badge bg-${getLevelColor(e.level)}">${e.level}</span>
          <small class="text-muted">📅 ${formatDate(e.date)}</small>
        </div>
        <div class="d-grid">
          <a href="register.html?id=${e.id}" class="btn btn-primary btn-sm">✍️ Đăng ký ngay</a>
        </div>
      </div>
    </div>
  </div>`;
}

function initFilters() {
  const searchInput = document.getElementById('search-input');
  const categoryFilter = document.getElementById('category-filter');
  const levelFilter = document.getElementById('level-filter');
  const resetBtn = document.getElementById('reset-filter');
  const countEl = document.getElementById('result-count');

  if (!searchInput) return;

  function applyFilter() {
    const q = searchInput.value.toLowerCase().trim();
    const cat = categoryFilter.value;
    const lv = levelFilter.value;
    currentFiltered = events.filter(e => {
      const matchQ = e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q);
      const matchCat = cat === '' || e.category === cat;
      const matchLv = lv === '' || e.level === lv;
      return matchQ && matchCat && matchLv;
    });
    if (countEl) countEl.textContent = `Hiển thị ${currentFiltered.length} / ${events.length} sự kiện`;
    renderEventCards(currentFiltered);
  }

  searchInput.addEventListener('input', applyFilter);
  categoryFilter.addEventListener('change', applyFilter);
  levelFilter.addEventListener('change', applyFilter);
  resetBtn.addEventListener('click', () => {
    searchInput.value = '';
    categoryFilter.value = '';
    levelFilter.value = '';
    applyFilter();
  });

  applyFilter();
}

// =============================================
// MODAL
// =============================================
// =============================================
// REGISTER PAGE
// =============================================
function initRegisterPage() {
  const form = document.getElementById('register-form');
  if (!form) return;

  // Populate select
  const select = document.getElementById('event-select');
  if (select) {
    events.forEach(e => {
      const opt = document.createElement('option');
      opt.value = e.id;
      opt.textContent = `${e.title} — ${formatDate(e.date)}`;
      select.appendChild(opt);
    });
    // Pre-select from URL query
    const params = new URLSearchParams(window.location.search);
    const preId = params.get('id');
    if (preId) select.value = preId;
  }

  form.addEventListener('submit', function(ev) {
    ev.preventDefault();
    if (validateForm()) {
      submitRegistration();
    }
  });

  // Live validation on blur
  ['fullname', 'email', 'phone', 'class-input', 'event-select'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('blur', () => validateField(id));
  });
}

function validateField(id) {
  const el = document.getElementById(id);
  if (!el) return true;
  const val = el.value.trim();
  let msg = '';

  if (id === 'fullname') {
    if (!val) msg = 'Họ và tên không được để trống.';
    else if (val.length < 3) msg = 'Họ và tên tối thiểu 3 ký tự.';
  } else if (id === 'email') {
    if (!val) msg = 'Email không được để trống.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) msg = 'Email không đúng định dạng.';
  } else if (id === 'phone') {
    if (!val) msg = 'Số điện thoại không được để trống.';
    else if (!/^\d{9,11}$/.test(val)) msg = 'Số điện thoại chỉ chứa chữ số, từ 9 đến 11 chữ số.';
  } else if (id === 'class-input') {
    if (!val) msg = 'Tên lớp không được để trống.';
  } else if (id === 'event-select') {
    if (!val) msg = 'Vui lòng chọn sự kiện/khóa học.';
  }

  showFieldError(el, msg);
  return msg === '';
}

function showFieldError(el, msg) {
  el.classList.remove('is-invalid', 'is-valid');
  const feedback = el.nextElementSibling;
  if (msg) {
    el.classList.add('is-invalid');
    if (feedback && feedback.classList.contains('invalid-feedback')) feedback.textContent = msg;
  } else {
    el.classList.add('is-valid');
  }
}

function validateForm() {
  const fields = ['fullname', 'email', 'phone', 'class-input', 'event-select'];
  const results = fields.map(id => validateField(id));
  return results.every(Boolean);
}

function submitRegistration() {
  const reg = {
    id: Date.now(),
    fullname: document.getElementById('fullname').value.trim(),
    email: document.getElementById('email').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    classname: document.getElementById('class-input').value.trim(),
    eventId: parseInt(document.getElementById('event-select').value),
    createdAt: new Date().toLocaleString('vi-VN')
  };
  const list = getRegistrations();
  list.push(reg);
  saveRegistrations(list);

  const successAlert = document.getElementById('success-alert');
  const eventName = events.find(e => e.id === reg.eventId)?.title || '';
  if (successAlert) {
    successAlert.innerHTML = `✅ Đăng ký thành công! <strong>${reg.fullname}</strong> đã đăng ký <strong>${eventName}</strong>. <a href="registrations.html" class="alert-link">Xem danh sách đăng ký →</a>`;
    successAlert.classList.remove('d-none');
    successAlert.scrollIntoView({ behavior: 'smooth' });
  }
  document.getElementById('register-form').reset();
  document.querySelectorAll('.is-valid, .is-invalid').forEach(el => el.classList.remove('is-valid', 'is-invalid'));
}

// =============================================
// REGISTRATIONS PAGE
// =============================================
function renderRegistrationsPage() {
  const tbody = document.getElementById('reg-tbody');
  const emptyMsg = document.getElementById('empty-msg');
  const tableWrapper = document.getElementById('table-wrapper');
  if (!tbody) return;

  function render() {
    const list = getRegistrations();
    const countEl = document.getElementById('reg-count');
    if (countEl) countEl.textContent = list.length;

    if (list.length === 0) {
      if (emptyMsg) emptyMsg.classList.remove('d-none');
      if (tableWrapper) tableWrapper.classList.add('d-none');
      return;
    }
    if (emptyMsg) emptyMsg.classList.add('d-none');
    if (tableWrapper) tableWrapper.classList.remove('d-none');

    tbody.innerHTML = list.map((r, i) => {
      const ev = events.find(e => e.id === r.eventId);
      return `<tr>
        <td>${i + 1}</td>
        <td>${r.fullname}</td>
        <td>${r.email}</td>
        <td>${r.phone}</td>
        <td>${r.classname}</td>
        <td>${ev ? ev.title : 'Không rõ'}</td>
        <td>${r.createdAt}</td>
        <td><button class="btn btn-danger btn-sm" onclick="deleteOne(${r.id})">🗑️ Xóa</button></td>
      </tr>`;
    }).join('');
  }

  window.deleteOne = function(id) {
    if (!confirm('Xóa đăng ký này?')) return;
    const list = getRegistrations().filter(r => r.id !== id);
    saveRegistrations(list);
    render();
  };

  const deleteAllBtn = document.getElementById('delete-all-btn');
  if (deleteAllBtn) {
    deleteAllBtn.addEventListener('click', () => {
      if (!confirm('Xóa TẤT CẢ đăng ký? Thao tác không thể hoàn tác.')) return;
      saveRegistrations([]);
      render();
    });
  }

  render();
}

// =============================================
// STATS on index
// =============================================
function animateCount(el, target) {
  let start = 0;
  const step = Math.ceil(target / 40);
  const interval = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = start + (el.dataset.suffix || '');
    if (start >= target) clearInterval(interval);
  }, 30);
}
function initStats() {
  document.querySelectorAll('[data-count]').forEach(el => {
    animateCount(el, parseInt(el.dataset.count));
  });
}

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedEvents();
  initFilters();
  renderEventCards(events);
  initRegisterPage();
  renderRegistrationsPage();
  initStats();
});
