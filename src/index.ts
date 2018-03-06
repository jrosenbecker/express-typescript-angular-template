import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from './inversify/inversify.config';
import { TYPES } from './inversify/inversify.types';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';

// Import and register the controllers (done automattically through the controller annotations)
import './controllers';

// Use inversify to manage dependency injection and register the static routes
const inversifyServer = new InversifyExpressServer(container, null, {rootPath: '/api'}).setConfig((app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
});

const server = inversifyServer.build();

// Serve static resources at the root route
server.use(express.static(path.join(__dirname, '..', 'dist', 'web-app')));
server.use('/ckeditor', express.static(path.join(__dirname, 'ckeditor')));
server.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'web-app', 'index.html'));
});

// Set port based on environment variables
server.set('port', (process.env.PORT || 3000));

server.listen(server.get('port'), (err) => {
   if (err) {
       return console.error('An error occurred', err);
   }

   console.log(`Server is listening on ${server.get('port')}`);
});
