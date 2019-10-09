const express = require('express'); 
const routes = express.Router();
const LoginController = require('./Controllers/LoginController')

routes.get('/provasyscoin',LoginController.store);

module.exports = routes