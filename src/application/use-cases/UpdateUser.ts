import { User } from '../../domain/User';

export class UpdateUser {
  execute(id: number, name: string): User {
    // For simplicity, just returning a new user.
    // In a real-world scenario, you'd fetch and update a user using UserRepository.
    return new User(id, name);
  }
}
