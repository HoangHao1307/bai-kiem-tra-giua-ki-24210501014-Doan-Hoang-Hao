# PLUGGED - Website Sự Kiện & Workshop Guitar Điện

## 1. Thông tin sinh viên
- Họ tên: ........................................................
- MSSV: ..........................................................
- Lớp: ............................................................

## 2. Mô tả dự án
PLUGGED là website tĩnh giới thiệu và đăng ký các sự kiện/workshop liên quan
đến **guitar điện** (workshop kỹ thuật, jam session, hội thảo, đêm biểu diễn...).
Người dùng có thể xem danh sách sự kiện, tìm kiếm theo tên, lọc theo danh mục
và cấp độ, xem chi tiết bằng modal, đăng ký tham gia và xem lại danh sách đã
đăng ký. Toàn bộ dữ liệu sự kiện được lưu bằng mảng JavaScript, dữ liệu đăng ký
được lưu bằng LocalStorage — không sử dụng backend, không sử dụng database.

## 3. Công nghệ sử dụng
- HTML5 (semantic tags: header, nav, main, section, footer)
- CSS3 (file CSS tự thiết kế: `assets/css/style.css`)
- Bootstrap 5 (Navbar, Grid, Card/Ticket card, Modal, Form, Badge, Alert)
- JavaScript thuần (render dữ liệu, tìm kiếm, lọc, validation, LocalStorage)
- GitHub Pages (public website)

## 4. Chức năng chính
- **Trang chủ (`index.html`)**: hero giới thiệu, lợi ích tham gia, sự kiện nổi bật.
- **Danh sách sự kiện (`courses.html`)**: tối thiểu 10 sự kiện, tìm kiếm theo
  tên, lọc theo danh mục/cấp độ, nút reset bộ lọc.
- **Xem chi tiết bằng Bootstrap Modal**: tên, ảnh, mô tả chi tiết, danh mục,
  cấp độ, ngày tổ chức, nút đăng ký.
- **Form đăng ký (`register.html`)**: Họ tên, Email, SĐT, Lớp, chọn sự
  kiện, ghi chú — có validation bằng JavaScript, hiển thị lỗi riêng từng
  trường (không dùng `alert()` chung).
- **Lưu trữ bằng LocalStorage**: dữ liệu đăng ký không mất khi reload trang.
- **Danh sách đăng ký (`registrations.html`)**: xem lại, xóa từng đăng ký
  hoặc xóa toàn bộ.
- **Responsive**: hiển thị tốt trên desktop, tablet, mobile.

## 5. Cấu trúc thư mục
```
midterm-project/
|
|-- index.html
|-- courses.html
|-- register.html
|-- registrations.html
|
|-- assets/
|   |-- css/
|   |   |-- style.css
|   |
|   |-- js/
|   |   |-- data.js
|   |   |-- main.js
|   |
|   |-- images/
|       |-- banner.svg
|       |-- course-1.svg ... course-10.svg
|
|-- README.md
|-- AI_USAGE.md
```

## 6. Link demo
- GitHub repository: ........................................................
- GitHub Pages: .............................................................

## 7. Ảnh giao diện
> Thêm ảnh chụp màn hình trang chủ, danh sách sự kiện, modal chi tiết và form
> đăng ký vào đây trước khi nộp bài (ví dụ đặt trong `assets/images/screenshots/`).

## 8. Hướng dẫn chạy local
1. Tải hoặc clone repository về máy.
2. Mở trực tiếp file `index.html` bằng trình duyệt (Chrome, Edge, Firefox...),
   hoặc dùng extension "Live Server" trong VS Code để có trải nghiệm tốt hơn.
3. Không cần cài đặt backend, database hay bất kỳ dependency nào — toàn bộ là
   HTML/CSS/JS thuần kèm Bootstrap qua CDN.

## 9. Ghi chú
- Ảnh minh họa sự kiện trong bản nộp này là ảnh SVG được tạo trong quá trình
  làm đồ án (không phải ảnh thật) — sinh viên có thể thay bằng ảnh thật của
  mình trong `assets/images/` (giữ đúng tên file hoặc cập nhật lại đường dẫn
  trong `assets/js/data.js`).
- Dữ liệu sự kiện mẫu nằm trong `assets/js/data.js`, có thể sửa/thêm để phù
  hợp với câu lạc bộ/lớp học/sự kiện thật của bạn.
