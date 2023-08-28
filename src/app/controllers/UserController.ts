import { Request, Response } from 'express';
import { CreateUser } from '../../application/use-cases/CreateUser';
import { ListUsers } from '../../application/use-cases/ListUsers';
import { UpdateUser } from '../../application/use-cases/UpdateUser';
import { DeleteUser } from '../../application/use-cases/DeleteUser';


export class UserController {
  constructor(
    private createUser: CreateUser,
    private listUsers: ListUsers,
    private updateUser: UpdateUser,
    private deleteUser: DeleteUser
  ) {}

    create(req: Request, res: Response) {
    const user = this.createUser.execute(req.body.name);
    res.status(201).json(user);
  }

  list(req: Request, res: Response) {
    const users = this.listUsers.execute();
    res.status(200).json(users);
  }

  update(req: Request, res: Response) {
    const user = this.updateUser.execute(Number(req.params.id), req.body.name);
    res.status(200).json(user);
  }

  delete(req: Request, res: Response) {
    this.deleteUser.execute(Number(req.params.id));
    res.status(204).send(); // No content response for delete.
  }
}
