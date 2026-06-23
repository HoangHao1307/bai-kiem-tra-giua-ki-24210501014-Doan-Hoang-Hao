/* =========================================================
   data.js
   Dữ liệu mẫu cho website "PLUGGED - Sự kiện Guitar Điện"
   Đây là dữ liệu giả lập bằng mảng JavaScript (không backend,
   không database) theo đúng yêu cầu của đề bài (mục 6).
   ========================================================= */

const events = [
  {
    id: 1,
    title: "Kỹ thuật Solo Guitar Điện Cho Người Mới",
    category: "Workshop",
    level: "Beginner",
    image: "assets/images/course-1.svg",
    date: "2026-07-10",
    description: "Làm quen với scale, bend và vibrato cơ bản trên guitar điện.",
    detail:
      "Buổi workshop tập trung vào nền tảng solo: cách bấm scale Minor Pentatonic, kỹ thuật bend dây, vibrato và cách kết hợp các lick đơn giản thành một đoạn solo ngắn. Phù hợp cho người mới cầm đàn điện từ 3-6 tháng."
  },
  {
    id: 2,
    title: "Jam Session: Blues & Rock Đêm Thứ Sáu",
    category: "Jam Session",
    level: "Intermediate",
    image: "assets/images/course-2.svg",
    date: "2026-07-12",
    description: "Cùng chơi nhạc trực tiếp với ban nhạc theo chủ đề Blues/Rock.",
    detail:
      "Một buổi jam mở, người tham gia mang đàn của mình đến chơi cùng trống - bass - keyboard theo các vòng hòa âm Blues 12 bar và Rock cơ bản. Có khu vực ampli và pedal sẵn để cắm trực tiếp."
  },
  {
    id: 3,
    title: "Masterclass: Shred Guitar Nâng Cao",
    category: "Workshop",
    level: "Advanced",
    image: "assets/images/course-3.svg",
    date: "2026-07-18",
    description: "Kỹ thuật shred, sweep picking và alternate picking tốc độ cao.",
    detail:
      "Lớp học chuyên sâu dành cho người chơi đã vững kỹ thuật cơ bản, tập trung vào sweep picking, alternate picking tốc độ cao, legato liên tục và cách luyện metronome để tăng tempo an toàn."
  },
  {
    id: 4,
    title: "Hội thảo: Chọn Ampli & Pedal Hiệu Ứng",
    category: "Hội thảo",
    level: "Mọi cấp độ",
    image: "assets/images/course-4.svg",
    date: "2026-07-20",
    description: "Hiểu về amp tube, amp solid-state và cách build pedalboard.",
    detail:
      "Chuyên gia âm thanh chia sẻ sự khác biệt giữa ampli tube và solid-state, cách chọn pedal overdrive/distortion/delay/reverb phù hợp với phong cách chơi, và cách sắp xếp thứ tự pedal trên pedalboard."
  },
  {
    id: 5,
    title: "Đêm Nhạc Guitar Điện - Plugged Night",
    category: "Biểu diễn",
    level: "Mọi cấp độ",
    image: "assets/images/course-5.svg",
    date: "2026-07-25",
    description: "Đêm biểu diễn của các band/sinh viên đam mê guitar điện.",
    detail:
      "Sự kiện biểu diễn mở, nơi các nhóm nhạc và cá nhân yêu guitar điện trình diễn trước khán giả. Có sân khấu, âm thanh chuyên nghiệp và khu vực giao lưu sau chương trình."
  },
  {
    id: 6,
    title: "Riff & Power Chord Cho Người Mới Bắt Đầu",
    category: "Workshop",
    level: "Beginner",
    image: "assets/images/course-6.svg",
    date: "2026-07-28",
    description: "Học các riff Rock kinh điển và power chord cơ bản.",
    detail:
      "Buổi học dành cho người mới hoàn toàn: cách bấm power chord, palm mute, và chơi lại một số riff Rock/Punk kinh điển theo tempo chậm trước khi tăng dần tốc độ."
  },
  {
    id: 7,
    title: "Battle Of Bands - Guitar Showdown",
    category: "Biểu diễn",
    level: "Advanced",
    image: "assets/images/course-7.svg",
    date: "2026-08-02",
    description: "Cuộc thi đối đầu giữa các guitarist trên sân khấu thật.",
    detail:
      "Vòng thi đối đầu trực tiếp giữa các guitarist, mỗi người có 90 giây để trình diễn một đoạn solo tự chọn trước ban giám khảo và khán giả. Người chiến thắng nhận phần thưởng từ ban tổ chức."
  },
  {
    id: 8,
    title: "Clinic: Setup & Bảo Trì Guitar Điện",
    category: "Hội thảo",
    level: "Mọi cấp độ",
    image: "assets/images/course-8.svg",
    date: "2026-08-05",
    description: "Hướng dẫn lên dây, chỉnh action và bảo quản đàn điện.",
    detail:
      "Kỹ thuật viên hướng dẫn cách lên dây đàn đúng tone, chỉnh action và intonation cơ bản, vệ sinh phím đàn, thay dây đúng cách và những lưu ý bảo quản guitar điện theo thời gian."
  },
  {
    id: 9,
    title: "Tapping & Legato Kỹ Thuật Cao",
    category: "Workshop",
    level: "Intermediate",
    image: "assets/images/course-9.svg",
    date: "2026-08-09",
    description: "Luyện tapping hai tay và legato mượt mà trên cần đàn dài.",
    detail:
      "Buổi học đi sâu vào kỹ thuật tapping một tay, tapping hai tay và legato (hammer-on, pull-off liên tục) để tạo ra những đoạn chạy nốt mượt mà, thường thấy trong các bản solo hiện đại."
  },
  {
    id: 10,
    title: "Studio Session: Thu Âm Guitar Điện",
    category: "Hội thảo",
    level: "Advanced",
    image: "assets/images/course-10.svg",
    date: "2026-08-15",
    description: "Trải nghiệm thu âm guitar điện tại phòng thu thực tế.",
    detail:
      "Người tham gia được trải nghiệm quy trình thu âm guitar điện thực tế: chọn mic, đặt mic trước loa ampli, thu DI và xử lý hậu kỳ cơ bản cùng kỹ thuật viên phòng thu."
  }
];
