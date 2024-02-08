import {LoginController} from '../controller/authentication.controller';
import { AsyncRouter } from 'express-async-router';

const authRouter = AsyncRouter();

authRouter.post('/login', LoginController.Login_User);

export default authRouter;
