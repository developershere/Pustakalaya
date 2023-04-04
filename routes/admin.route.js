import express from 'express';
import { signUp } from '../controller/admin.controller.js';
const server = express.Router();
server.post('/create-admin',signUp);
export default server;