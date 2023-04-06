import express from 'express';
import {signup,signin} from '../controller/user.controller.js';
const server = express.Router();
server.post('/registration',signup);
server.post('/login',signin);
export default server;