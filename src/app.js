const express = require("express");
const connectDB = require("./config/database");
const { Auth } = require("./middlewares/auth");

const app = express();

app.use("/user", Auth, (req, res) => {
  res.send();
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
