import express from 'express';
import { addBook, viewBookById, deleteBookById } from '../controller/book.controller.js';
const server = express.Router();

server.post('/addBook', addBook);
server.get('/viewBookById/:id', viewBookById);
server.get('/deleteBookById/:id', deleteBookById);

export default server;