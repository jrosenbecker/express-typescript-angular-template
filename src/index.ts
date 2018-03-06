import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { myContainer } from './inversify/inversify.config';
import * as bodyParser from 'body-parser';
import { TYPES } from './inversify/inversify.types';
import './controllers';
import * as express from 'express';
import * as path from 'path';

const routes = express.Router();
routes.use(express.static(path.join(__dirname, '..', 'dist', 'web-app')));

const inversifyServer = new InversifyExpressServer(myContainer, routes).setConfig((app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
});

const server = inversifyServer.build();

server.set('port', (process.env.PORT || 3000));

server.listen(server.get('port'), (err) => {
   if (err) {
       return console.error('An error occurred', err);
   }

   console.log(`Server is listening on ${server.get('port')}`);
});
