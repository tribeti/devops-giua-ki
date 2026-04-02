const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;
const APP_NAME = process.env.APP_NAME;

// Kết nối Database thực (MongoDB)
mongoose
  .connect(DB_URL)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error(err));

const User = mongoose.model("User", new mongoose.Schema({ name: String }));

// API 1 (GET): Health check trả về status ok
app.get("/health", (req, res) => res.json({ status: "ok" }));

// API 2 (GET): Trang about hiển thị thông tin sinh viên
app.get("/about", (req, res) => {
  res.json({
    name: "Tên của bạn",
    student_id: "MSSV của bạn",
    class: "Lớp của bạn",
  });
});

// API 3 (POST): Lưu dữ liệu xuống DB để đáp ứng yêu cầu có API POST
app.post("/user", async (req, res) => {
  const user = new User({ name: req.body.name || "Default User" });
  await user.save();
  res.json({ message: "Đã lưu user vào database", user });
});

app.listen(PORT, () => console.log(`${APP_NAME} đang chạy ở port ${PORT}`));
