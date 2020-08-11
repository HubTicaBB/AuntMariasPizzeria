'use strict'

const updateOrder = (orderId, updates) => {
  if (!orderId || !updates || !updates.pizzaId || !updates.address ) {
    throw new Error('To update an order please provide new pizza type and address');
  }

  return { message: `Order ${orderId} is successfully updated`};
};

module.exports = updateOrder;
