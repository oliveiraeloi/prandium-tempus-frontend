import { OrderItem } from './order-item';
import { OrderStatus } from './order-status';

export interface Order {
  id: number;
  status: OrderStatus;
  time: number;
  minimalPrice: number;
  deliveryCost: number;
  restaurantName: string;
  items: OrderItem[];
}