const express = require("express");
const user = require("./model/user");
require("dotenv").config({ path: "./config/.env" });
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1:27017")
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const hostname = "127.0.0.1";
const port = process.env.port;
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
app.get("/", async (req, res) => {
  try {
    const users = await user.find({});
    
     res.send(users);
  
  } catch (err) {
    console.log(err);
  }
});
app.post("/users", async (req, res) => {
  let newUser = new user({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const User = await newUser.save();
    res.status(201).json(User);
    console.log(res.status(201).json(User));
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
app.put("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = req.body;
    const result = await user.findByIdAndUpdate(userId, updatedUser, {
      new: true,
    });
    console.log(result);
    const a = res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An error occurred" });
  }
});
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await user.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});
