const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost:27017/ToDoApp")
  .then(() => console.log("Connected"))
  .catch(() => console.log("Not Connected"));

const taskSchema = new mongoose.Schema({
  text: String,
});

const Task = mongoose.model("Task", taskSchema);

app.get("/api/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
});

app.post("/api/tasks", async (req, res) => {
  const newTask = new Task({
    text: req.body.text,
  });
  const task = await newTask.save();
  res.send(task);
});

app.delete("/api/tasks/:id", async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  res.send(task);
});

app.listen(4000, () => console.log("Listenin on port 4000"));
