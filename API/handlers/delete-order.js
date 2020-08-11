'use strict'

const deleteOrder = orderId => {
  if (!orderId) {
    throw new Error('To cancel an order please provide order Id');
  }

  return {};
};

module.exports = deleteOrder;
