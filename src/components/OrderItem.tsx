import React from 'react';

import { OrderItemProps } from '../models/props/order-item';

const OrderItem: React.FC<OrderItemProps> = ({ item }) => {
  return (
    <div className="bg-gray-200 flex py-2 px-4 my-1 border border-solid border-gray-300 rounded">
      <span className="flex-1">{item.name}</span>
      {/* User placeholder flex-grow-0*/}
      <span className="w-1/6 text-right">{item.price}</span>
    </div>
  );
}

export default OrderItem;
