import { Logger } from '@exceptionhandling/logger';


export function DataLoader(logger: Logger):() => Promise<any > {

  return (): Promise<any> => {
    return Promise.all([])
    .then(data => {
      // ToDo: Load data required for initializing the app
      //userservice.getuser()data initialzer
	// Use case : Intial data
    });
  };

}
