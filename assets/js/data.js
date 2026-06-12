const events = [
  {
    id: 1,
    title: "Workshop HTML & CSS Cơ Bản",
    category: "Frontend",
    level: "Beginner",
    image: "assets/images/event-1.svg",
    date: "2026-07-10",
    seats: 30,
    description: "Nắm vững nền tảng HTML5 và CSS3 để xây dựng trang web tĩnh đầu tiên.",
    detail: "Khóa học bao gồm: HTML5 semantic tags, CSS selectors, Box Model, Flexbox layout, responsive cơ bản. Học viên sẽ tự tay xây dựng một landing page hoàn chỉnh sau buổi học."
  },
  {
    id: 2,
    title: "Thực Chiến JavaScript DOM",
    category: "Frontend",
    level: "Intermediate",
    image: "assets/images/event-2.svg",
    date: "2026-07-15",
    seats: 25,
    description: "Xử lý sự kiện, thao tác DOM và lưu trữ dữ liệu bằng LocalStorage.",
    detail: "Nội dung gồm: Event listeners, querySelector, render dữ liệu từ mảng, form validation bằng JS thuần, LocalStorage CRUD. Học viên sẽ xây dựng một mini app quản lý công việc."
  },
  {
    id: 3,
    title: "Bootstrap 5 Thực Hành",
    category: "Frontend",
    level: "Beginner",
    image: "assets/images/event-3.svg",
    date: "2026-07-20",
    seats: 35,
    description: "Thiết kế giao diện responsive chuyên nghiệp với Bootstrap 5.",
    detail: "Sử dụng Bootstrap Grid, Navbar, Cards, Modal, Forms, Utilities. Xây dựng giao diện admin dashboard responsive hoàn chỉnh trong 1 ngày."
  },
  {
    id: 4,
    title: "Git & GitHub Cơ Bản",
    category: "DevOps",
    level: "Beginner",
    image: "assets/images/event-4.svg",
    date: "2026-07-25",
    seats: 40,
    description: "Quản lý source code, làm việc nhóm và deploy với GitHub Pages.",
    detail: "Học các lệnh Git cơ bản, branching, merging, pull request, giải quyết conflict. Triển khai website lên GitHub Pages miễn phí. Kỹ năng thiết yếu cho mọi lập trình viên."
  },
  {
    id: 5,
    title: "Hội Thảo UI/UX Design",
    category: "Design",
    level: "Intermediate",
    image: "assets/images/event-5.svg",
    date: "2026-08-01",
    seats: 20,
    description: "Nguyên tắc thiết kế giao diện người dùng và trải nghiệm người dùng.",
    detail: "Tìm hiểu về Color Theory, Typography, Wireframing với Figma, Prototyping và User Testing. Cách áp dụng design thinking vào dự án thực tế."
  },
  {
    id: 6,
    title: "Python Cho Người Mới Bắt Đầu",
    category: "Backend",
    level: "Beginner",
    image: "assets/images/event-6.svg",
    date: "2026-08-05",
    seats: 30,
    description: "Lập trình Python từ zero — cú pháp, cấu trúc dữ liệu và bài toán cơ bản.",
    detail: "Biến, kiểu dữ liệu, vòng lặp, hàm, list/dict, đọc ghi file, xử lý lỗi. Giải quyết các bài toán thực tế và chuẩn bị nền tảng cho Data Science hoặc Web với Django."
  },
  {
    id: 7,
    title: "React JS Nhập Môn",
    category: "Frontend",
    level: "Advanced",
    image: "assets/images/event-7.svg",
    date: "2026-08-10",
    seats: 20,
    description: "Xây dựng Single Page Application với React Hooks và Component.",
    detail: "useState, useEffect, props, component lifecycle, React Router, fetch API và quản lý state cơ bản. Dự án cuối khóa: Mini e-commerce SPA."
  },
  {
    id: 8,
    title: "Workshop Bảo Mật Web",
    category: "Security",
    level: "Intermediate",
    image: "assets/images/event-8.svg",
    date: "2026-08-15",
    seats: 25,
    description: "Các lỗ hổng bảo mật phổ biến và cách phòng chống trong lập trình web.",
    detail: "XSS, CSRF, SQL Injection, CORS, HTTPS, Content Security Policy. Thực hành tấn công và phòng thủ trong môi trường lab an toàn. Tư duy bảo mật cho developer."
  },
  {
    id: 9,
    title: "Hackathon 24H — Xây App AI",
    category: "AI",
    level: "Advanced",
    image: "assets/images/event-9.svg",
    date: "2026-08-20",
    seats: 50,
    description: "Cuộc thi lập trình 24 giờ xây dựng ứng dụng tích hợp AI thực tế.",
    detail: "Làm việc nhóm 3-5 người, xây dựng prototype ứng dụng AI trong 24 giờ. Có mentor hỗ trợ, phần thưởng hấp dẫn và cơ hội kết nối với doanh nghiệp công nghệ."
  }
];
