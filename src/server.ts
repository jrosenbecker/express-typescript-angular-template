import * as express from 'express';
import { interfaces, controller, httpGet } from 'inversify-express-utils';
import { injectable, inject } from 'inversify';
import { TYPES } from './inversify/inversify.types';
import { IExampleService } from './service-contracts/iexample-service';
import { myContainer } from './inversify/inversify.config';

@controller('/')
export class AppServer implements interfaces.Controller {
    constructor(@inject(TYPES.IExampleService) private exampleService: IExampleService) { }

    @httpGet('/')
    private index(req: express.Request, res: express.Response) {
        return this.exampleService.helloWorld();
    }
}
