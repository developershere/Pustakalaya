import express from 'express';
import { addBook,removeBook} from '../controller/book.controller.js';
import { verify } from '../services/verfiy.js';
const server = express.Router();
server.post('/add',verify,addBook);
// server.post('/update',updateBook);
server.get('/delete-book/:id',removeBook);
export default server;