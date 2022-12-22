function logging(req, res, next) {
  console.log("Time", Date.now());

  next();
}

module.exports = logging;