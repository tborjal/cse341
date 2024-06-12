const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.ebakRoute);
routes.get('/tubol', lesson1Controller.tubolRoute);

module.exports = routes;