import {OrderController} from '../controller/order.controller';
import { AsyncRouter } from 'express-async-router';

const orderRouter = AsyncRouter();


orderRouter.post('/order', OrderController.Create_Order);
orderRouter.delete('/order/:orderId', OrderController.Cancel_Order);
orderRouter.get('/order', OrderController.Get_All_Orders);
orderRouter.get('/order/:userId', OrderController.Get_Order_By_Id);

export default orderRouter;



