import { Auth } from '../entity/authentication.entity';
import { AuthRepository } from '../repository/authentication.repository';

const authRepository = new AuthRepository();

export class AuthService {
  async Login_User(email: string, password: string): Promise<{ id: number; token: string }> {
    const user = await authRepository.Login_User(email, password);
    const id = user.id;
    const token = user.token.token; 
    return { id, token };
  }
}





