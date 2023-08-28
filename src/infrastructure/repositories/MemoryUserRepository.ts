import { IUserRepository } from '@/interfaces/repositories/IUserRepository';
import { User } from '@/domain/User';
  
export class MemoryUserRepository implements IUserRepository {
  private users: User[] = [];

  async getAllUsers(): Promise<User[]> {
    return this.users;
  }

  async getUserById(id: number): Promise<User | null> {
    return this.users.find((user) => user.id === id) || null;
  }

  async createUser(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async updateUser(user: User): Promise<User> {
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
      return user;
    }
    throw new Error('User not found');
  }

  async deleteUser(id: number): Promise<void> {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
