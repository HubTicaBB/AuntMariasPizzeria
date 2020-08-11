'use strict'

const Api = require('claudia-api-builder');
const api = new Api();

const getPizzas = require('./handlers/get-pizzas');

api.get('/pizzas', () => getPizzas());

module.exports = api;
