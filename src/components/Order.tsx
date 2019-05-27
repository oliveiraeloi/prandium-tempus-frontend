import React from 'react';

import { OrderProps } from '../models/props/order';
import OrderInfo from './OrderInfo';
import OrderItem from './OrderItem';
import OrderSummary from './OrderSummary';

const Order: React.FC<OrderProps> = ({ order }) => {
  return (
    <div className="bg-white p-8 border border-solid border-gray-300 rounded shadow-lg">
      <div className="flex items-baseline">
        <span className="flex-initial py-1 px-2 border border-solid border-gray-500 rounded font-bold text-sm uppercase opacity-50">{order.status}</span>
        <span className="flex-1 px-2 font-bold text-xl text-green-500">{order.restaurantName}</span>
        <button className="flex-initial py-2 px-4 border border-solid border-green-500 rounded-full font-bold text-green-500">Join Order</button>
      </div>
      <div className="flex justify-start py-2">
        <OrderInfo icon="fa-stopwatch" label="Order time" text={order.time} />
        <OrderInfo icon="fa-cash-register" label="Minimal order price" text={order.minimalPrice} />
        <OrderInfo icon="fa-motorcycle" label="Delivery cost" text={order.deliveryCost} />
      </div>
      <div>
        {order.items.map(i => <OrderItem key={i.id} item={i} />)}
        <OrderSummary order={order} />
      </div>
    </div>
  );
};

export default Order;
