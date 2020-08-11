'use strict'

const Api = require('claudia-api-builder');
const api = new Api();

const pizzas = require('./data/pizzas.json');

api.get('/pizzas', () => {
  return pizzas;
});

module.exports = api;
