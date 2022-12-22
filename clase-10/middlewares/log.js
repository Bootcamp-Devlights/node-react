function log(req, res, next) {
  console.log("Recibi una response a la ruta:", `${req.baseUrl}${req.path}`, req.method);

  next();
}

module.exports = log;