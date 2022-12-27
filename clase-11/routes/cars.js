const express = require("express");
const carsModel = require("../models/cars");

const carsRoutes = express.Router();

carsRoutes.get("/", async (req, res) => {
  const data = await carsModel.findAll();

  res.json({ status: 200, data });
})

carsRoutes.get("/:id", async (req, res) => {
  const data = await carsModel.findByPk(req.params.id);

  res.json({ status: 200, data });
})

carsRoutes.post("/create", async (req, res) => {
  const data = await carsModel.create(req.body);

  res.json({ status: 200, data });
})

carsRoutes.delete("/:id", async (req, res) => {
  const data = await carsModel.destroy({
    where: {
      id: req.params.id
    }
  })

  res.json({ status: 200, data });
})

carsRoutes.patch("/:id", async (req, res) => {
  const data = await carsModel.update(req.body, {
    where: {
      id: req.params.id
    }
  });

  res.json({ status: 200, data });
})

module.exports = carsRoutes;