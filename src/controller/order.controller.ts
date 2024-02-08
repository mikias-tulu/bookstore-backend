import { Request, Response, NextFunction } from 'express';
import { OrderService } from '../service/order.service';
import { checkError } from '@libs/validator';
import { BadRequestException } from '@libs/errors';
import { STATUS_CODE_OK} from '@libs/constant';

const orderService = new OrderService();

export class OrderController {

  static async Create_Order(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const errors = checkError(req.body);
       if (!errors.isEmpty())  throw new BadRequestException("Error "+errors.mapped);
      const {userId, bookId} = req.body;
      const newOrder = await orderService.Create_Order(userId, bookId);
       res.status(STATUS_CODE_OK).json({ success: true, message:"Order Created Successfully", newOrder });
    } catch (error) {
      next(error)
    }
}


  static async Cancel_Order(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const errors = checkError(req);
      if (!errors.isEmpty())  throw new BadRequestException("Error "+errors.mapped);
      const orderId = parseInt(req.params.id);
      const result = await orderService.Cancel_Order(orderId);
       res.status(STATUS_CODE_OK).json({ success: true, message:"Order Cancelled Successfully", result });
    } catch (error) {
      next(error)
    }
    
  }

  static async Get_All_Orders(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const orders = await orderService.Get_All_Orders();
      res.status(STATUS_CODE_OK).json({ success: true, message:"Orders Fetched Successfully", orders });
    } catch (error) {
      next(error)
    }

  }

  static async Get_Order_By_Id(req: Request, res: Response, next:NextFunction): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const  skip  = Number(req.query.skip);
      const  take  = Number(req.query.take);
      const order = await orderService.Get_Order_By_Id(id, skip, take);
          res.status(STATUS_CODE_OK).json({ success: true, message:"Order Fetched Successfully", order });
    } catch (error) {
      next(error)
    }
  }

}
