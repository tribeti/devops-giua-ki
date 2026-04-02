# 🚀 DevOps Mini Project

Đây là một dự án mini áp dụng các kiến thức DevOps cơ bản, bao gồm Frontend (HTML/JS thuần), Backend (Node.js/Express) và Database (MongoDB). Toàn bộ hệ thống được đóng gói và vận hành thông qua Docker và Docker Compose.

## 🛠️ Yêu cầu hệ thống (Prerequisites)
Trước khi chạy dự án, hãy đảm bảo máy tính của bạn đã cài đặt:
* [Git](https://git-scm.com/)
* [Docker](https://www.docker.com/)
* Docker Compose (v2)

## ⚙️ Hướng dẫn cài đặt và chạy dự án

**Bước 1: Clone mã nguồn về máy**
Mở Terminal và chạy lệnh sau để tải project về:
```bash
git clone https://github.com/tribeti/devops-giua-ki.git
cd devops-giua-ki
````

**Bước 2: Khởi chạy hệ thống bằng Docker**
Chạy lệnh sau để Docker tự động tải image, build code và chạy các container:

```bash
sudo docker compose up -d --build
```

*(Nếu dùng Windows hoặc MacOS, bạn có thể bỏ chữ `sudo` đi).*

## 🌐 Cách sử dụng và kiểm tra

Sau khi Docker chạy xong (3 container chuyển sang trạng thái running), bạn có thể truy cập hệ thống qua các đường dẫn sau:

  * **Frontend (Giao diện người dùng):** [http://localhost:8080](https://www.google.com/search?q=http://localhost:8080)
      * Click vào nút "Xem thông tin" để gọi API từ Backend và hiển thị dữ liệu sinh viên.
  * **Backend - Trang thông tin sinh viên:** [http://localhost:3000/about](https://www.google.com/search?q=http://localhost:3000/about)
  * **Backend - Kiểm tra trạng thái Server:** [http://localhost:3000/health](https://www.google.com/search?q=http://localhost:3000/health)

## 🛑 Cách dừng hệ thống

Khi không muốn chạy nữa, bạn dùng lệnh sau để tắt và xóa các container:

```bash
sudo docker compose down
```

-----

*Dự án phục vụ bài kiểm tra giữa kỳ môn DevOps.*