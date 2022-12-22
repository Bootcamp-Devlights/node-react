const express = require("express");
const cors = require("cors");
const routes = require('./routes');
const logging = require("./middlewares/logging")

const app = express();

app.use(logging);
app.use(cors());

// app.use("/assets", express.static("static"));
app.use(express.static("static"));
app.use('/api', routes);

app.listen(3000);
