import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
    user: string;
    password: string;
  }
  interface Response {
    user: User;
    token: string;
  }

  class AuthenticateUserService {

  }


  export default AuthenticateUserService;