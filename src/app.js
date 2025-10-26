const express = require("express");
const {Auth} = require("./middlewares/auth");

const app = express();

app.use("/user", Auth, (req, res) => {
  res.send();
});

app.listen(3000, () => {
  console.log("server running at port 3000");
});
