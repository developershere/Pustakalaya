import express from 'express';
import {verify} from '../services/verfiy.js';
import { signup,getUserById, updateUserById,signin } from '../controller/user.controller.js';
const server = express.Router();
server.post('/signup', signup);
server.post('/login',signin);
// server.post('/forgotPassword', forgotPassword);
// server.post('/resetPassword', resetPassword);
server.get('/profile/view/:id',verify,getUserById);
server.post('/update/:id',verify,updateUserById);


export default server;