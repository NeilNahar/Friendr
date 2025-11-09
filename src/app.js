const express = require("express");
const connectDB = require("./config/database");
const { Auth } = require("./middlewares/auth");
const { User } = require("./models/user");

const app = express();

app.use(express.json());

app.post("/signup", Auth, async (req, res) => {
  const user = new User({
    firstName: "Asd1",
    lastName: "Qwe1",
    email: "aj111@gmail.com",
    password: "Asdqwe1234",
    about:"Hello"
  });
  await user.save();
  res.send("User data sent successfully");
});
app.get("/feed", async (req, res) => {
  const feed = await User.find();
  console.log(feed);
  res.send(feed);
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
