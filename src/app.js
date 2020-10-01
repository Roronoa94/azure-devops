import cors from 'cors';
import express from 'express';
import container from './configureContainer';
import { handleError } from './middleware/customErrorHandler';
container.configureContainer();

const router = require('./routes/router');

let app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.all('/azure/*', router);
app.use(handleError);

module.exports = app;
