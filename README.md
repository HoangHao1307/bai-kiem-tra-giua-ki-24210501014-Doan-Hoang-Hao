# 🚀 TechFest — Website Đăng Ký Sự Kiện & Workshop Công Nghệ

## 1. Thông tin sinh viên
- **Họ tên:** [Điền họ tên của bạn]
- **MSSV:** [Điền MSSV của bạn]
- **Lớp:** [Điền tên lớp của bạn]
- **Giảng viên:** ThS. Lê Thanh Thoại
- **Môn học:** Lập trình Web — Đề giữa kỳ

---

## 2. Mô tả dự án

**TechFest** là website tĩnh giới thiệu và cho phép đăng ký các sự kiện, workshop, và khóa học lập trình của Khoa CNTT — Trường ĐH Bình Dương, Phân hiệu Cà Mau.

Người dùng có thể:
- Duyệt danh sách 9 sự kiện/khóa học
- Tìm kiếm theo tên, lọc theo danh mục & cấp độ
- Xem chi tiết từng sự kiện qua Bootstrap Modal
- Đăng ký tham dự với form có validation JavaScript đầy đủ
- Xem và xóa danh sách đã đăng ký (lưu bằng LocalStorage)

---

## 3. Công nghệ sử dụng

| Công nghệ | Mục đích |
|-----------|----------|
| HTML5 | Cấu trúc trang với semantic tags |
| CSS3 + Custom CSS | Thiết kế giao diện riêng, hover effects |
| Bootstrap 5.3 | Grid, Navbar, Cards, Modal, Forms, Badges |
| JavaScript thuần | Render dữ liệu, tìm kiếm, lọc, validation, LocalStorage |
| GitHub Pages | Deploy website tĩnh miễn phí |

---

## 4. Chức năng chính

- ✅ **Trang chủ:** Navbar responsive, Hero banner, thống kê, featured events, lý do tham gia, CTA
- ✅ **Danh sách sự kiện:** 9 sự kiện render từ mảng JS, tìm kiếm theo tên, lọc theo danh mục/cấp độ, reset bộ lọc
- ✅ **Modal chi tiết:** Hiển thị đầy đủ thông tin sự kiện, nút đăng ký trực tiếp
- ✅ **Form đăng ký:** 6 trường dữ liệu, validation JS (không dùng alert chung), hiển thị lỗi gần input
- ✅ **LocalStorage:** Lưu đăng ký, xem lại sau reload, xóa từng dòng, xóa tất cả
- ✅ **Responsive:** Desktop / Tablet / Mobile

---

## 5. Cấu trúc thư mục

```
midterm-project/
├── index.html          # Trang chủ
├── courses.html        # Danh sách sự kiện + search/filter
├── register.html       # Form đăng ký
├── registrations.html  # Danh sách đã đăng ký
├── assets/
│   ├── css/
│   │   └── style.css   # CSS tùy biến
│   ├── js/
│   │   ├── data.js     # Mảng dữ liệu 9 sự kiện
│   │   └── main.js     # Logic DOM, search, filter, modal, validation, LS
│   └── images/         # SVG event images + banner
├── README.md
└── AI_USAGE.md
```

---

## 6. Link demo

- 🌐 **GitHub Pages:** `https://hoanghao1307.github.io/24210501014-242101TH001-Doan-Hoang-Hao//`
- 📁 **GitHub Repo:** `https://github.com/HoangHao1307/24210501014-242101TH001-Doan-Hoang-Hao`

> ⚠️ Cập nhật hai link trên sau khi deploy lên GitHub Pages.

---

## 7. Hướng dẫn chạy local

```bash
# Cách 1: Mở trực tiếp
Mở file index.html bằng trình duyệt (Chrome, Firefox, Edge)

# Cách 2: Dùng Live Server (VS Code)
1. Cài extension Live Server trong VS Code
2. Chuột phải vào index.html → "Open with Live Server"
```

---

## 8. Ảnh giao diện

> Thêm ảnh chụp màn hình (screenshot) các trang chính vào đây sau khi deploy.

---

## 9. Checklist hoàn thành

- [x] 4 trang HTML đầy đủ
- [x] 9 sự kiện trong mảng data.js
- [x] Render card từ JS
- [x] Tìm kiếm + lọc + reset
- [x] Bootstrap Modal xem chi tiết
- [x] Form đăng ký 6 trường
- [x] Validation JS, hiển thị lỗi gần input
- [x] LocalStorage lưu/xóa đăng ký
- [x] Bootstrap Grid + 5 components
- [x] CSS riêng (style.css)
- [x] Responsive mobile/tablet/desktop
- [ ] GitHub Pages (cần deploy)
- [ ] README cập nhật link
