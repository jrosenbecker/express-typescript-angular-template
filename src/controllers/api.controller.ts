import { Request, Response } from 'express';
import { interfaces, controller, httpGet } from 'inversify-express-utils';
import { injectable, inject } from 'inversify';
import { TYPES } from '../inversify/inversify.types';
import { IExampleService } from '../service-contracts/iexample-service';

@controller('/helloworld')
export class ApiController implements interfaces.Controller {
    constructor(@inject(TYPES.IExampleService) private exampleService: IExampleService) { }

    @httpGet('/')
    private index(req: Request, res: Response): Response {
        return res.json({
            message: this.exampleService.helloWorld()
        });
    }
}
