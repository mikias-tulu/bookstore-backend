import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../service/authentication.service';
import { BadRequestException } from '@libs/errors';
import { checkError } from '@libs/validator';
import { STATUS_CODE_OK } from '@libs/constant';

const authService = new AuthService();

export class LoginController {

  static async Login_User(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const errors = checkError(req);
      if (!errors.isEmpty()) throw new BadRequestException("Error " + errors.mapped);
      
      const { email, password } = req.body;
      const { id, token } = await authService.Login_User(email, password); 
      
      res.status(STATUS_CODE_OK).json({ success: true, message: "User Successfully LoggedIn", user: { id, token } });
    } catch (error) {
      next(error);
    }
  }
  
}