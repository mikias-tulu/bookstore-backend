import {UserController} from '../controller/user.controller';
import { AsyncRouter } from 'express-async-router';

const usersRouter = AsyncRouter();

usersRouter.get('/users', UserController.Get_All_Users);
usersRouter.get('/users/:id', UserController.Get_User_By_Id);
usersRouter.post('/users', UserController.Create_User);
usersRouter.put('/users/:id', UserController.Update_User);
usersRouter.delete('/users/:id', UserController.Delete_User);

export default usersRouter;



