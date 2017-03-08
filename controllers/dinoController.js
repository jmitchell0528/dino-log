const dinos = require('../models/dinos');

module.exports = {
  index: function (req, res) {
    if (req.query.danger) {
      const dangerous = dinos.filter(dino => parseInt(req.query.danger) < dino.danger);

      return res.status(200).json(dangerous);
    }

    res.status(200).json(dinos);
  },

  show: function (req, res) {
    const dino = dinos.find(dino => dino.id === parseInt(req.params.id));

    res.status(200).json(dino);
  },

  create: function (req, res) {
    dinos.push(req.body);

    res.status(201).json(dinos);
  },

  update: function (req, res) {
    const index = dinos.findIndex(dino => dino.id === parseInt(req.params.id));
    dinos[index] = req.body;

    res.status(200).json(dinos);
  },

  destroy: function (req, res) {
    const index = dinos.findIndex(dino => dino.id === parseInt(req.params.id));
    dinos.splice(index, 1);

    res.status(200).json(dinos);
  },
};
