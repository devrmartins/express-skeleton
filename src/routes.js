import express from 'express';
import HomeController from './app/controllers/HomeController';
import UserController from './app/controllers/UserController';

const routes = express.Router();

routes.get('/',HomeController.index);

routes.get('/users', UserController.index);

export default routes;