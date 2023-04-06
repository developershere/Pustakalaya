import express from 'express';
import { addBook, viewBookById, deleteBookById, updateBookById } from '../controller/book.controller.js';
const server = express.Router();

server.post('/addBook', addBook);
server.get('/viewBookById/:id', viewBookById);
server.get('/deleteBookById/:id', deleteBookById);
server.post('/updateBookById/:id', updateBookById);

export default server;