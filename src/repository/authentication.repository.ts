import {  UnauthorizedException } from '@libs/errors';
import { signToken } from '@libs/jwt';
import { comparePassword, hashPassword } from '@libs/password';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

import  { Auth }  from '@entity/authentication.entity';


export class AuthRepository {

  async Login_User (email: string, password: string){
    const user = await prisma.user.findUnique({ where: { email } });
  
    if (!user || !comparePassword(password, user.password))
      throw new UnauthorizedException('Incorrect credential');
  
      const token = signToken({ user: { id: user.id, email: user.email } });
    return { id: user.id, token }; 
  }
  
 
}





