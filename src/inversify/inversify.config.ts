import { Container } from 'inversify';
import { TYPES } from './inversify.types';
import { IExampleService } from '../service-contracts/iexample-service';
import { ExampleService } from '../services/example-service';
import { AppServer } from '../server';

const myContainer = new Container();
myContainer.bind<IExampleService>(TYPES.IExampleService).to(ExampleService);

export { myContainer };
