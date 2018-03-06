import { injectable } from 'inversify';
import { IExampleService } from '../service-contracts/iexample-service';

@injectable()
export class ExampleService implements IExampleService {
    helloWorld(): String {
        return 'Hello World!';
    }
}
