'use strict'

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const getOrders = orderId => {
  if (typeof orderId === 'undefined') {
    return docClient.scan({
      TableName: 'pizza-orders',
      FilterExpression: 'orderStatus = :o',
      ExpressionAttributeValues: { ':o': 'pending' }
    }).promise()
      .then(result => result.Items);
  }

  return docClient.get({
    TableName: 'pizza-orders',
    Key: { orderId: orderId }
  }).promise()
    .then(result => result.Item);
};

module.exports = getOrders;
