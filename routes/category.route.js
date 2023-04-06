import express from 'express';
import {addCategory,deleteCategory,viewAllCategory} from '../controller/category.controller.js';
const server = express.Router();
server.post('/add',addCategory);
server.post('/delete-category',deleteCategory);
server.get('/view-category',viewAllCategory);
export default server;