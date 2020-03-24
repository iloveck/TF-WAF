import { Logger } from '@exceptionhandling/logger';


export function DataLoader(logger: Logger):() => Promise<any > {

  return (): Promise<any> => {
    return Promise.all([])
    .then(data => {
      //userservice.getuser()data initialzer

    });
  };

}
