const User = require('../models/user');

function indexUser(req, res, next) {
  console.log('showUser function run');

  User.find()
    .then(users => {
      console.log('hello', users);
      res.status(200).json(users);
    })
    .catch(err => {
      next(err);
    });
}

function createUser(req, res, next) {
  console.log(req.body);
  User.create(req.body)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(next);
}

module.exports = {
  index: indexUser,
  create: createUser
};
