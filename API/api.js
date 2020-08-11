'use strict'

const Api = require('claudia-api-builder');
const api = new Api();

const getPizzas = require('./handlers/get-pizzas');

api.get('/', () => 'Welcome to Aunt Maria\'s Pizzeria');

api.get('/pizzas', () => getPizzas());

api.get('/pizzas/{id}', request => getPizzas(request.pathParams.id), { error: 404 });

module.exports = api;
