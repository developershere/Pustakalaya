import express from 'express';
import { addCity } from '../controller/city.controller.js';
const Router = express.Router();
Router.post('/add-city',addCity);

export default Router;