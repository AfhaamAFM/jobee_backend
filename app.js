import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';


// import indexRouter from './routes/users'

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

var app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors({
    origin:"*",
    credentials:true
}))


// redirecting routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
