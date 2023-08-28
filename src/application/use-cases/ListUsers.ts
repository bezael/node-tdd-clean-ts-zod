import { User } from '../../domain/User';

export class ListUsers {
  // In a real-world scenario, you'd use a UserRepository to fetch users.
  execute(): User[] {
    return []; // For simplicity, returning an empty array.
  }
}
