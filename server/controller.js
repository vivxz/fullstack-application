const Orders = require('../database/index.js');

const controller = {
  get: (req, res) => {
    Orders.find()
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(404).send(err))
  },
  getUsername: (req, res) => {
    let { userName } = req.params;
    Orders.find({ userName })
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(404).send(err))
  },
  post: (req, res) => {
    let { userName, foodItem, restaurant } = req.body;
    Orders.create({ userName, foodItem, restaurant })
      .then(() => res.status(201).send('POSTED'))
      .catch((err) => res.status(404).send(err))
  },
  update: (req, res) => {
    let { userName, foodItem, restaurant } = req.body;
    let { _id } = req.params;
    Orders.findByIdAndUpdate(_id, { userName, foodItem, restaurant })
      .then(() => res.status(202).send('UPDATED'))
      .catch((err) => res.status(404).send(err))
  },
  delete: (req, res) => {
    let { _id } = req.params;
    Orders.findByIdAndDelete(_id)
      .then(() => res.status(203).send('DELETED'))
      .catch((err) => res.status(404).send(err))
  }
}

module.exports = controller;