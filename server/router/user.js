const userRouter = require('express').Router();
const controller = require('../controller/user.js');

userRouter.post('/register/', controller.registerUser);
userRouter.get('/get-users/', controller.getUsers);



module.exports = userRouter;