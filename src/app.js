const express = require("express");
const connectDB = require("./config/database");
const { Auth } = require("./middlewares/auth");
const { User } = require("./models/user");
const { validateSignUp } = require("./utils/valdateSignUp");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.json());

app.post("/signup", Auth, async (req, res) => {
  // validateSignUp(req);
  const enryptedPassword = await bcrypt.hash("Hello123", 10);
  const user = new User({
    firstName: "Asd12",
    lastName: "Qwe12",
    email: "aj2@gmail.com",
    password: enryptedPassword,
    about: "Hello",
  });
  await user.save();
  res.send("User data sent successfully");
});
app.get("/feed", async (req, res) => {
  const feed = await User.find();
  console.log(feed);
  res.send(feed);
});
app.post("/login", Auth, async (req, res) => {
  // validateSignUp(req);
  bcrypt.compare(myPlaintextPassword, hash);
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
