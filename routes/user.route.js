import express from 'express';
import signup from '../controller/user.controller.js';
const server = express.Router();
server.post('/signup',signup);
export default server;