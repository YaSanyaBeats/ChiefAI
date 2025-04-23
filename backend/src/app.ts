import dotenv from "dotenv";
dotenv.config({ path: `.env` });

import express from 'express';
import { connectDB } from './db/connect';

// import routes
import indexRouter from './routes/index';
import usersRouter from './routes/users';



const app = express();
const port = process.env.API_PORT;

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  connectDB();
  console.log(`ChiefAI back on localhost:${port}`)
})

module.exports = app;