import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

import  { Book }  from '@entity/book.entity';
import { BadRequestException } from '@libs/errors';


export class BookRepository {

  async Get_All_Books(): Promise<Book[]> {
    return await prisma.book.findMany();
  }

  async Get_Book_By_Id(id: number): Promise<Book | null> {
    return await prisma.book.findUnique({
      where: { id }
    });
  }

  async Create_Book(input: Book): Promise<Book> {
    
    const { id, title, writer, coverImage, point, tags } =  input;

    const foundBook = await prisma.book.findUnique({
      where: { 
        id 
      }
    });
  
    if (foundBook)
      throw new BadRequestException('Book is already existed.');
  
    const book = await prisma.book.create({
      data: {
        title,
        writer,
        coverImage,
        point,
        tags
      },
    });
  
    return book;
  }

  async Update_Book(id: number, book: Book): Promise<Book | null> {
    return prisma.book.update({ where: { id }, data: book });
  }

  async Delete_Book(id: number): Promise<Book> {
    return prisma.book.delete({ where: { id } });
  }
}





