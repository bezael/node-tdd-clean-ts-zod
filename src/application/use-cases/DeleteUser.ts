export class DeleteUser {
  execute(id: number): void {
    // In a real-world scenario, you'd use a UserRepository to delete a user.
    console.log(`User with id ${id} deleted`);
  }
}
