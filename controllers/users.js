const Url = require('../models/user');

function indexUrl(req, res) {
  console.log('showUrl function run');

  Url.find()
    .then(url => {
      res.status(200).json(url);
    })
    .catch(err => {
      next(err);
    });
}

function createUrl(req, res, next) {
  console.log(req.body);
  Url.create(req.body)
    .then(url => {
      res.status(201).json(url);
    })
    .catch(next);
}

module.exports = {
  index: indexUrl,
  create: createUrl
};
