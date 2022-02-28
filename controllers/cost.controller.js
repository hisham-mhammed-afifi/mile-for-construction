const Cost = require("../models/Cost");

const addCost = async (req, res) => {
  try {
    const cost = await Cost.create(req.body);
    res.status(201).send(cost);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getAllCost = async (req, res) => {
  try {
    const cost = await Cost.find({});
    res.status(201).send(cost);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getSingleCost = async (req, res) => {
  try {
    const cost = await Cost.findOne({ _id: req.params.id });
    if (!cost) {
      res.status(404).send("Cost Not Found");
    }
    res.status(200).send(cost);
  } catch (error) {}
};

const updateCost = async (req, res) => {
  try {
    const cost = await Cost.create();
    res.status(201).send(cost);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const deleteCost = async (req, res) => {
  try {
    const cost = await Cost.create(req.body);
    res.status(201).send(cost);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = { addCost, getSingleCost, getAllCost, updateCost, deleteCost };
