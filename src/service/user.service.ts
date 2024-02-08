import { User } from '../entity/user.entity';
import { UserRepository } from '../repository/user.repository';

const userRepository = new UserRepository();

export class UserService {
  async Get_All_Users(): Promise<User[]> {
    return userRepository.Get_All_Users();
  }

  async Get_User_By_Id(id: number): Promise<User | null> {
    return userRepository.Get_User_By_Id(id);
  }

  async Create_User(user: User): Promise<User> {
      return userRepository.Create_User(user);
  }

  async Update_User(id: number, user: User): Promise<User | null> {
    return userRepository.Update_User(id, user);  }

  async Delete_User(id: number): Promise<User> {
    return userRepository.Delete_User(id);
  }
}
