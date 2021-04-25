import { Router } from 'express';
import adaptRoute from '@shared/infra/http/midlewares/adaptRoute';
import UsersControllers from '@module/users/infra/http/controllers/UsersControllers';

const usersRouter = Router();

usersRouter.post('/', adaptRoute(UsersControllers.index));

export default usersRouter;
