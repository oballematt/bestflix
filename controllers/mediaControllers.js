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
    }
}

