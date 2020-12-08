const db = require ("../models")

module.exports = {
    findAll: function(req, res){
        db.Media
        .find(req.query)
        .then(dbMedia => res.json(dbMedia))
        .catch(err => res.status(422).json(err))
    },
    create: function(req, res) {
        db.Media
        .create(req.body)
        .then(dbMedia => res.json(dbMedia))
        .catch(err => res.status(422).json(err))
    },
    findById: function(req, res) {
        db.Media
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Media
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
}