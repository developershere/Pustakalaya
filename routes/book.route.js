import express from 'express';
import { addBook } from '../controller/book.controller.js';
const server = express.Router();

server.post('/addBook', addBook);

export default server;