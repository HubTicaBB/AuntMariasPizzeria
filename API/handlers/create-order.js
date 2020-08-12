'use strict'

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid').v4;

const createOrder = order => {
  if (!order || !order.pizzaId || !order.address) {
    throw new Error('To order pizza please provide pizza type and address where pizza should be delivered.');
  }

  return docClient.put({
    TableName: 'pizza-orders',
    Item: {
      orderId: uuid(),
      pizzaId: order.pizzaId,
      address: order.address,
      orderStatus: 'pending'
    }
  }).promise()
    .then(response => response)
    .catch(saveError => {
      throw saveError;
    });
}

module.exports = createOrder;
