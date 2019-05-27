import React from 'react';

import { OrderProps } from '../models/props/order';

const OrderSummary: React.FC<OrderProps> = ({ order }) => {
  const totalCost = order.items.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="flex items-center py-2 px-4 my-1 border border-solid border-gray-300 rounded font-bold">
      <span className="flex-1">Total</span>
      <span className="ml-1">{totalCost + order.deliveryCost}</span>
    </div>
  );
}

export default OrderSummary;
