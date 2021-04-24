import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
const { PORT } = process.env;
console.log(PORT);
console.log(process.env);
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
