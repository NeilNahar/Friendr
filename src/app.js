const express = require("express");
const connectDB = require("./config/database");
const { Auth } = require("./middlewares/auth");
const { User } = require("./models/user");

const app = express();

app.post("/signup", Auth, async (req, res) => {
  const user = new User({
    firstName: "Aman",
    lastName: "Jain",
    email: "asd@gmail.com",
    password: "Asdqwe1234",
  });
  await user.save();
  res.send("User data sent successfully")
});

connectDB()
  .then(() => {
    console.log("Database Connected");
    app.listen(3000, () => {
      console.log("server running at port 3000");
    });
  })
  .catch((err) => {
    console.log("database not connected");
  });
