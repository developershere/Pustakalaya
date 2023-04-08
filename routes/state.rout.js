import express from 'express';
import {add} from '../controller/state.controller.js';
const server = express.Router();
server.post('/add-state',add);

export default server;