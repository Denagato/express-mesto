const path = require('path');
const getDataFromFile = require('../helpers/files.js');

const dataPath = path.join(__dirname, '..', 'data', 'users.json');

const getUsers = (req, res) => {
  return getDataFromFile(dataPath)
    .then(users => res.status(200).send(users))
    .catch(err => res.status(500).send({ message: err.message }));
};

const getProfile = (req, res) => {
  return getDataFromFile(dataPath)
    .then(users => {
      const user = users.find(user => user._id === req.params.id);
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id'});
      }
      res.status(200).send(user);
    })
    .catch(err => res.status(500).send({ message: err.message }));
}

module.exports = { getUsers, getProfile };