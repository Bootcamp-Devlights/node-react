const express = require("express");
const router = express.Router();
const userRoutes = require("./user")
const adminRoutes = require("./admin")

router.get("/", (req, res) => {
  res.send("Hello world!");

  // res.sendFile(__dirname + "/../static/test.html");
});

router.use("/user", userRoutes);

router.use("/admin", adminRoutes);

module.exports = router;