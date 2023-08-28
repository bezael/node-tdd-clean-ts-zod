import { User } from '../../domain/User';

export interface IUserRepository {
  getAllUsers(): Promise<User[]>;
  getUserById(id: number): Promise<User | null>;
  createUser(user: User): Promise<User>;
  updateUser(user: User): Promise<User>;
  deleteUser(id: number): Promise<void>;
}
