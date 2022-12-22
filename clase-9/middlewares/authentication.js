function checkAuthentication(req, res, next) {
  if (true) {
    next();
  } else {
    res.end("Usuario no autorizado");
  }
}

module.exports = {
  checkAuthentication,
}