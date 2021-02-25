const usersRouter = require('express').Router();
const {
  getUsers, getProfile, addUser, updateAvatar, updateProfile,
} = require('../controllers/users');

usersRouter.get('/users', getUsers);
usersRouter.get('/users/:id', getProfile);
usersRouter.post('/users', addUser);
usersRouter.patch('/users/me', updateProfile);
usersRouter.patch('/users/me/avatar', updateAvatar);

module.exports = usersRouter;
