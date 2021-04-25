import { Request, Response } from 'express';

const adaptRoute = (controllerFunciton: any) => async (
  request: Request,
  response: Response,
) => {
  const httpRequest: HttpRequest = {
    user: req?.user,
    body: req.body,
    params: req.params,
    query: req.query,
  };
  const httpResponse = await controller.handle(httpRequest);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
export default adaptRoute;
