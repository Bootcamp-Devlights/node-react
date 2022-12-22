const express = require("express");
const router = express.Router();
const { user } = require("../constants");


router.get("/", (req, res) => {
  res.json(user);
});

module.exports = router;