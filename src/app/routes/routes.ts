import { Express, Request, Response } from 'express';
import { MemoryUserRepository } from '../../infrastructure/repositories/MemoryUserRepository';
import { CreateUser } from '../../application/use-cases/CreateUser';
import { DeleteUser } from '../../application/use-cases/DeleteUser';
import { ListUsers } from '../../application/use-cases/ListUsers';
import { UpdateUser } from '../../application/use-cases/UpdateUser';
import { UserController } from '../controllers/UserController';

const userRepository = new MemoryUserRepository();
const userController = new UserController(
  new CreateUser(userRepository),
  new ListUsers(),
  new UpdateUser(),
  new DeleteUser()
);

export const routes = (app: Express) => {
  app.get('/', (req: Request, res: Response) => res.send('Hello world!'));
  app.post('/users', (req: Request, res: Response) => userController.create(req, res));
  app.get('/users', (req: Request, res: Response) => userController.list(req, res));
  app.put('/users/:id', (req: Request, res: Response) => userController.update(req, res));
  app.delete('/users/:id', (req: Request, res: Response) => userController.delete(req, res));
};