import { Container } from 'inversify';
import { TYPES } from './inversify.types';
import { IExampleService } from '../service-contracts/iexample-service';
import { ExampleService } from '../services/example-service';

const container = new Container();
container.bind<IExampleService>(TYPES.IExampleService).to(ExampleService);

export { container };
