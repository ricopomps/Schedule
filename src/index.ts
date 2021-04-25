import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import { errors } from 'celebrate';
import cors from 'cors';
import dotenv from 'dotenv';
import AppError from '';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  console.log(err);
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});
const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
