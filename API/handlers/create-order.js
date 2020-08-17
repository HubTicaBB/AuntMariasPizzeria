'use strict'

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
const minReqPromise = require('minimal-request-promise');

module.exports = function createOrder(order) {
  if (!order || !order.pizzaId || !order.address) {
    throw new Error('To order pizza please provide pizza type and address where pizza should be delivered.');
  }

  return minReqPromise.post('https://some-like-it-hot.effortless-serverless.com/delivery', { 
    headers: {
      "Authorization": "aunt-marias-pizzeria-1234456789",
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      pickupTime: '15.34pm',
      pickupAddress: 'Aunt Maria\'s Pizzeria',
      deliveryAddress: order.address,
      webhookUrl: 'https://r3emkux2e5.execute-api.us-east-1.amazonaws.com/latest/delivery'
    })
  })
    .then(rawResponse => JSON.parse(rawResponse.body))
    .then(response => {
      return docClient.put({
        TableName: 'pizza-orders',
        Item: {
          orderId: response.deliveryId,
          pizzaId: order.pizzaId,
          address: order.address,
          orderStatus: 'pending',
        }
      }).promise()
        .then(result => result)
        .catch(saveError => {
          throw saveError;
        });
    });  
};
