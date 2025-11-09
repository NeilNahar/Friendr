const Auth = (req, res, next) => {
  //    logic
  try {
    next();
  } catch (err) {
    res.status(500).send("Authentication failed");

  }
};
module.exports = { Auth };
