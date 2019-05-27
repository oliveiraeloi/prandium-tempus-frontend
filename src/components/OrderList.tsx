import React /*, { useState } */ from 'react';

import { Order as Model } from '../models/order';
import { OrderStatus } from '../models/order-status';
import Order from './Order';

const OrderList: React.FC = () => {
  // const [orders, setOrders] = useState([]);
  const orders: Model[] = [
    { 
      id: 201901,
      status: OrderStatus.Active,
      restaurantName: 'Big Kahuna Burger',
      items: [
        { id: 1, name: 'Double shot', price: 23.80 },
        { id: 2, name: 'Lumberjack', price: 34.80 },
        { id: 3, name: 'Coca-cola', price: 6.50},
        { id: 4, name: 'Super expensive item', price: 399.90 }
      ],
      time: 30,
      minimalPrice: 25,
      deliveryCost: 7.90
    }
  ];

  return (
    <>
      {orders.map(o => <Order key={o.id} order={o}/>)}
    </>
  )
};

export default OrderList;
