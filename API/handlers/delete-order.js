'use strict'

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const deleteOrder = orderId => {
  if (typeof orderId === 'undefined') {
    throw new Error('To cancel an order please provide order Id');
  }

  return docClient.delete({
    TableName: 'pizza-orders',
    Key: { orderId: orderId }
  }).promise()
    .then(response => response)
    .catch(deleteError => {
      throw deleteError;
    });
};

module.exports = deleteOrder;
