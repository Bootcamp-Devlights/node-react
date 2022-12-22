const express = require("express");
const router = express.Router();
const { checkAuthentication } = require('../middlewares/authentication');

router.get("/", checkAuthentication, (req, res) => {
  res.send("Administracion");
});

module.exports = router;