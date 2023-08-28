// import { User } from '@/domain/User';
import { IUserRepository } from '@/interfaces/repositories/IUserRepository';
// import { User } from '@src/domain/User';


export class CreateUser {
  constructor(private userRepository: IUserRepository) { }
  
  async execute(name: string): Promise<User> {
    const user = new User(Date.now(), name);
    return await this.userRepository.createUser(user);
  }
}
