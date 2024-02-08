import {BookController} from '../controller/book.controller';
import { AsyncRouter } from 'express-async-router';

const booksRouter = AsyncRouter();

booksRouter.get('/books', BookController.Get_All_Books);
booksRouter.get('/book/:id', BookController.Get_Book_By_Id);
booksRouter.post('/book', BookController.Create_Book);
booksRouter.put('/book/:id', BookController.Update_Book);
booksRouter.delete('/book/:id', BookController.Delete_Book);

export default booksRouter;



