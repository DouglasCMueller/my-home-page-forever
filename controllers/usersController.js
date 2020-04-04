const db = require("../models");

// Defining methods for the usersController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)

      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function (req, res) {
    db.User
      .find({ email: req.body.email })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateUserWebsite: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, { $push: { favoritewebsite: req.body } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteUserWebsite: function (req, res) {
    console.log(req.body)
    
     db.User
       .findByIdAndUpdate({ _id: req.params.id }, { $pull: { favoritewebsite: {id: req.body.id }}})
       .then(dbModel => res.json(dbModel))
       .catch(err => res.status(422).json(err));
   },

  addUserTodo: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, { $push: { todo: req.body } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteUserTodo: function (req, res) {
   console.log(req.body)
   
    db.User
      .findByIdAndUpdate({ _id: req.params.id }, { $pull: { todo: {title: req.body.title }}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addUserEvent: function (req, res) {

    db.User
      .findOneAndUpdate({ _id: req.params.id }, { $push: { event: req.body } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteUserEvent: function (req, res) {
    console.log(req.body)
    
     db.User
       .findByIdAndUpdate({ _id: req.params.id }, { $pull: { event: {title: req.body.title }}})
       .then(dbModel => res.json(dbModel))
       .catch(err => res.status(422).json(err));
   },

  remove: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};