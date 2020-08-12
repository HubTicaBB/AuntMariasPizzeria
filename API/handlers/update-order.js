'use strict'

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const updateOrder = (orderId, updates) => {
  if (typeof orderId === 'undefined' || !updates || !updates.pizzaId || !updates.address ) {
    throw new Error('To update an order please provide new pizza type and address');
  }

  return docClient.update({
    TableName: 'pizza-orders',
    Key: { orderId: orderId },
    UpdateExpression: 'set pizzaId = :p, address = :a',
    ConditionExpression: 'orderStatus = :o',
    ExpressionAttributeValues: {
      ':p' : updates.pizzaId,
      ':a' : updates.address,
      ':o' : 'pending'
    },
    ReturnValues: 'ALL_NEW'
  }).promise()
    .then(response => response.Attributes)
    .catch(updateError => {
      throw updateError;
    });
};

module.exports = updateOrder;
