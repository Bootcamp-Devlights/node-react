const express = require("express");
const route = express.Router();
const userModel = require("../schemas/user");

route.get("/", (req, res) => {
  userModel.find({}, (error, data) => {
    if (error) {
      res.json({ status: 500, data: error });
    }

    res.json({ status: 200, data });
  });
});

route.get("/:id", (req, res) => {
  userModel.find({ id: req.params.id }, (error, data) => {
    if (error) {
      res.json({ status: 500, data: error });
    }

    res.json({ status: 200, data });
  });
});

route.post("/create", (req, res) => {
  console.log("El body es: ", req.body);

  const user = new userModel(req.body);

  user
    .save()
    .then((document) => {
      res.json({ status: 200, data: document });
    })
    .catch((error) => {
      res.json({ status: 500, data: error });
    });
});

route.put("/:id", (req, res) => {
  userModel.findOneAndUpdate(
    { id: req.params.id },
    req.body,
    {
      new: true
    },
    (error, data) => {
      if (error) {
        res.json({ status: 500, data: error });
      }

      res.json({ status: 200, data });
    }
  );
});

route.delete("/:id", (req, res) => {
  userModel.findOneAndDelete({ id: req.params.id }, {}, (error, data) => {
    if (error) {
      res.json({ status: 500, data: error });
    }

    res.json({ status: 200, data });
  });
});

module.exports = route;
