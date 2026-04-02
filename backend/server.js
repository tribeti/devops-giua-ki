const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;
const APP_NAME = process.env.APP_NAME;

mongoose
  .connect(DB_URL)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error(err));

const User = mongoose.model("User", new mongoose.Schema({ name: String }));

app.get("/", (req, res) =>
  res.send("Backend đang chạy! Hãy truy cập /about hoặc /health"),
);

app.get("/health", (req, res) => res.json({ status: "ok" }));

app.get("/about", (req, res) => {
  res.json({
    name: "Tên của bạn",
    student_id: "MSSV của bạn",
    class: "Lớp của bạn",
  });
});

app.post("/user", async (req, res) => {
  const user = new User({ name: req.body.name || "Default User" });
  await user.save();
  res.json({ message: "Đã lưu user vào database", user });
});

app.listen(PORT, () => console.log(`${APP_NAME} đang chạy ở port ${PORT}`));
