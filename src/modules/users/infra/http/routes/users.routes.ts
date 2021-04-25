import { Router } from 'express';
import adaptRoute from '@shared/infra/http/midlewares/adaptRoute';
import UsersControllers from '../controllers/UsersControllers';

const usersRouter = Router();

usersRouter.post('/', adaptRoute(UsersControllers.index));
