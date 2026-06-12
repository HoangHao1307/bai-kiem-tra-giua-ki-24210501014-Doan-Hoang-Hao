# AI Usage Report

## 1. Em có sử dụng AI không?

**Có** — Em đã sử dụng Claude (Anthropic) để hỗ trợ xây dựng dự án này.

---

## 2. AI hỗ trợ phần nào?

- Gợi ý cấu trúc thư mục và phân chia file
- Tạo dữ liệu mẫu 9 sự kiện trong `data.js`
- Tạo khung code ban đầu cho `main.js` (render cards, filter, LocalStorage)
- Gợi ý CSS variables và color palette
- Giải thích cách dùng Bootstrap Modal với JavaScript

---

## 3. Prompt đã sử dụng

Một số prompt chính em đã dùng:

1. *"Tạo file data.js với mảng 9 sự kiện công nghệ có các trường: id, title, category, level, image, date, description, detail"*
2. *"Viết hàm JavaScript render cards từ mảng events vào container, mỗi card có nút Xem chi tiết và Đăng ký"*
3. *"Giải thích cách validate form bằng JavaScript thuần, hiển thị lỗi gần từng input, không dùng alert()"*
4. *"Cách lưu mảng object vào LocalStorage và đọc lại bằng JSON.stringify/parse"*

---

## 4. Em đã chỉnh sửa gì sau khi AI sinh code?

- Đổi màu sắc giao diện theo đúng chủ đề đã chọn (Navy + Teal + Amber)
- Thêm `data-count` attribute để animate counter trên trang chủ
- Sửa lại logic filter để hỗ trợ tìm kiếm đồng thời tên VÀ mô tả
- Thêm pre-select sự kiện từ URL query `?id=X` khi click "Đăng ký" từ card
- Chỉnh responsive CSS cho màn hình nhỏ hơn 480px
- Thêm `onerror` fallback cho img tag để không vỡ layout khi thiếu ảnh

---

## 5. Phần nào em tự viết?

- Toàn bộ nội dung copy (tên sự kiện, mô tả, thông tin trường)
- Cấu trúc HTML từng trang (semantic tags, layout)
- CSS hover effects và transition
- Logic xử lý URL query string để pre-select sự kiện
- Xử lý edge case khi localStorage trống
- Viết README đầy đủ

---

## 6. Em học được gì?

- Cách tổ chức code frontend theo module: tách `data.js` và `main.js` giúp dễ bảo trì
- LocalStorage chỉ lưu được string nên phải dùng `JSON.stringify`/`JSON.parse`
- Bootstrap `is-invalid` / `is-valid` classes giúp hiển thị validation đẹp mà không cần CSS thêm
- Regex `/^\d{9,11}$/` để validate số điện thoại Việt Nam
- Cách truyền tham số qua URL (`?id=5`) để kết nối giữa các trang HTML tĩnh
- AI là công cụ hỗ trợ, không thể thay thế việc hiểu và tự debug code
