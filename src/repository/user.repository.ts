import { BadRequestException, UnauthorizedException } from '@libs/errors';
import { signToken } from '@libs/jwt';
import { comparePassword, hashPassword } from '@libs/password';


import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

import  { User }  from '@entity/user.entity';



interface SignUpInput {
  name: string;
  email: string;
  password?: string;
}

export class UserRepository {

  async Get_All_Users(): Promise<User[]> {
    return await prisma.user.findMany();
  }

  async Get_User_By_Id(id: number): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { id }
    });
  }

  async Create_User(input: User): Promise<User> {

    const { name, email, password } =  input;

    const existedUser = await prisma.user.findUnique({
      where: { 
        email 
      }
    });
  
    if (existedUser)
      throw new BadRequestException('Email is already existed.');
  
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword(password),
        points: 100
      },
    });
  
    const token = signToken({ user: { id: user.id, ...user } });
  
    const data = {
      name: user.name,
      email: user.email,
      token,
    };
  
    return data;
  }

  async Update_User(id: number, user: User): Promise<User | null> {
    return prisma.user.update({ where: { id }, data: user });
  }

  async Delete_User(id: number): Promise<User> {
    return prisma.user.delete({ where: { id } });
  }
}





