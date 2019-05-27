import React from 'react';

import { OrderInfoProps } from '../models/props/order-info';

const OrderInfo: React.FC<OrderInfoProps> = ({ icon, label, text }) => {
  return (
    <div className="pr-6">
      <i className={"fas " + icon}></i>
      <span className="ml-2 font-bold">{label}:</span>
      <span className="ml-1">{text}</span>
    </div>
  )
}

export default OrderInfo;
