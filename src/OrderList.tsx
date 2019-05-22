import React, { useState } from 'react';

enum OrderStatus {
  Active = 'active'
}

interface OrderItem {
  id: number;
  name: string;
  price: number;
}

interface Order {
  id: number;
  status: OrderStatus;
  time: number;
  minimalPrice: number;
  deliveryCost: number;
  restaurantName: string;
  items: OrderItem[];
}

interface OrderProps {
  order: Order
}

interface OrderItemProps {
  item: OrderItem
}

interface OrderInfoProps {
  icon: string;
  label: string;
  text: any;
}

const OrderItem: React.FC<OrderItemProps> = ({ item }) => {
  return (
    <div className="flex py-2 px-4 my-1 border border-solid border-gray-300 rounded bg-gray-200">
      <span className="flex-1">{item.name}</span>
      {/* User flex-grow-0*/}
      <span className="w-1/6 text-right">{item.price}</span>
    </div>
  );
}

const OrderSummary: React.FC<OrderProps> = ({ order }) => {
  const totalCost = order.items.reduce((acc, item) => acc + item.price, 0);
  return (
    <div>
      <div className="py-2 px-4 my-1 border border-solid border-gray-300 rounded">
        <div className="flex items-center font-bold">
          <div className="flex-1">
            <span className="">Total</span>
          </div>
          <span className="ml-1">{totalCost + order.deliveryCost}</span>
        </div>
      </div>
    </div>
  );
}

const OrderInfo: React.FC<OrderInfoProps> = ({ icon, label, text }) => {
  return (
    <div className="pr-6">
      <i className={"fas " + icon}></i>
      <span className="ml-2 font-bold">{label}:</span>
      <span className="ml-1">{text}</span>
    </div>
  )
}

const Order: React.FC<OrderProps> = ({ order }) => {
  return (
    <div className="p-8 border border-solid border-gray-300 rounded bg-white">
      <div className="flex items-baseline">
        <span className="flex-initial py-1 px-2 opacity-50 uppercase font-bold text-sm border border-solid border-gray-500 rounded">{order.status}</span>
        <span className="flex-1 px-2 text-green-500 font-bold text-xl">{order.restaurantName}</span>
        <button className="flex-initial py-2 px-4 font-bold text-green-500 border border-solid border-green-500 rounded-full">Join Order</button>
      </div>
      <div className="flex justify-start py-2 ">
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

const OrderList: React.FC = () => {
  // const [orders, setOrders] = useState([]);
  const orders: Order[] = [
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
