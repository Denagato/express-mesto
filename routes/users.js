const usersRouter = require('express').Router();
const { getUsers, getProfile, addUser, updateAvatar, updateProfile } = require('../controllers/users');

usersRouter.get('/users', getUsers);
usersRouter.get('/users/:id', getProfile);
usersRouter.post('/users', addUser);
usersRouter.patch('/users/me', updateAvatar);
usersRouter.patch('/users/me/avatar', updateProfile);

module.exports = usersRouter;