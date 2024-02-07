import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

import { Order } from '@entity/order.entity';

export class OrderRepository {
  
  async Get_All_Orders(): Promise<Order[]> {
    return await prisma.order.findMany();
  }

  async Get_Order_By_Id(id: number, skip: number, take: number): Promise<Order[]> {
    const orders = await prisma.order.findMany({
      where: {
        id,
      },
      skip: skip ? Number(skip) : undefined,
      take: take ? Number(take) : undefined,
      include: {
        book: true,
      },
    });
    return orders;
  }

  async Create_Order(userId: number, bookId: number): Promise<Order | String> {
    
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: { orders: true },
      });
      const book = await prisma.book.findUnique({
        where: { id: bookId },
      });
     let order;
      if (user.points >= book.point) {
         order = await prisma.order.create({
          data: {
            user: { connect: { id: userId } },
            book: { connect: { id: bookId } },
          },
        });
         await prisma.user.update({
          where: { id: userId },
          data: { points: { decrement: book.point } },
        });
        return order;
      }else {
        return "Insufficient points";
      }
  
  }


  async Cancel_Order(id: number): Promise<Order> {
     return await prisma.order.delete({
      where: {
        id
      },
    });
  }
}
