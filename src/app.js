import express from 'express';
import logger from 'morgan';
import path from 'path';
import { renderFile } from 'ejs';
import attachRoutes from './helpers/attachRoutes';

const app = express();

// just use html as views
app.set('views', `${__dirname}/views`);
app.engine('html', renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// attach routing
attachRoutes(app);

export default app;
