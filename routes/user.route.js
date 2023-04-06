import express from 'express';
import { signup, forgotPassword, resetPassword, getUserById, updateUserById } from '../controller/user.controller.js';
const server = express.Router();
server.post('/signup', signup);
server.post('/forgotPassword', forgotPassword);
server.post('/resetPassword', resetPassword);
server.get('/getUserById/:id', getUserById);
server.post('/updateUserById/:id', updateUserById);


export default server;