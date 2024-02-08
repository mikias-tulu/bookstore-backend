import { Order } from '../entity/order.entity';
import { OrderRepository } from '../repository/order.repository';

const orderRepository = new OrderRepository();

export class OrderService {
  async Create_Order(userId: number, bookId: number): Promise<Order|String> {
    return orderRepository.Create_Order(userId, bookId);
  }

  async Cancel_Order(orderId: number): Promise<Order> {
    return orderRepository.Cancel_Order(orderId);
  }
  async Get_All_Orders(): Promise<Order[]> {
    return orderRepository.Get_All_Orders();
  }

  async Get_Order_By_Id(id: number, skip: number, take: number): Promise<Order[]> {
    return orderRepository.Get_Order_By_Id(id, skip, take);
  }
}
