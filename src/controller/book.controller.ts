import { Request, Response, NextFunction } from 'express';
import { BookService } from '../service/book.service';
import { STATUS_CODE_OK } from '@libs/constant';
import { checkError } from '@libs/validator';
import { BadRequestException } from '@libs/errors';

const bookService = new BookService();

export class BookController {
  static async Get_All_Books(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const books = await bookService.Get_All_Books();
      res
        .status(STATUS_CODE_OK)
        .json({ success: true, message: 'Books Fetched Successfully', books });
    } catch (error) {
      next(error);
    }
  }

  static async Get_Book_By_Id(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const book = await bookService.Get_Book_By_Id(id);
      res
        .status(STATUS_CODE_OK)
        .json({ success: true, message: 'Book Fetched Successfully', book });
    } catch (error) {
      next(error);
    }
  }

  static async Create_Book(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const errors = checkError(req);
      if (!errors.isEmpty())
        throw new BadRequestException('Error ' + errors.mapped);
      const book = req.body;
      const newBook = await bookService.Create_Book(book);
      res
        .status(STATUS_CODE_OK)
        .json({ success: true, message: 'Book Created Successfully', newBook });
    } catch (error) {
      next(error);
    }
  }

  static async Update_Book(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const errors = checkError(req);
      if (!errors.isEmpty())
        throw new BadRequestException('Error ' + errors.mapped);
      const id = parseInt(req.params.id);
      const book = req.body;
      const updatedBookRecord = await bookService.Update_Book(id, book);
      res
        .status(STATUS_CODE_OK)
        .json({
          success: true,
          message: 'Book Record Updated Successfully',
          updatedBookRecord,
        });
    } catch (error) {
      next(error);
    }
  }

  static async Delete_Book(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      await bookService.Delete_Book(id);
   } catch (error) {
     next(error)
   }
}
}
