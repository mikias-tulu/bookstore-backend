import { Book } from '../entity/book.entity';
import { BookRepository } from '../repository/book.repository';


const bookRepository = new BookRepository();

export class BookService {
  async Get_All_Books(): Promise<Book[]> {
    return bookRepository.Get_All_Books();
  }

  async Get_Book_By_Id(id: number): Promise<Book | null> {
    return bookRepository.Get_Book_By_Id(id);
  }

  async Create_Book(order: Book): Promise<Book> {
      return bookRepository.Create_Book(order);
  }

  async Update_Book(id: number, order: Book): Promise<Book | null> {
    return bookRepository.Update_Book(id, order);  }

  async Delete_Book(id: number): Promise<Book> {
    return bookRepository.Delete_Book(id);
  }
}
