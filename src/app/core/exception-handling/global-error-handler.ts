import { ErrorHandler, Injectable } from '@angular/core';
import { Logger } from '@exceptionhandling/logger';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  constructor(private logger: Logger) {
    super();
  }

  handleError(error) {
    this.logger.logNShowErrorMessage(error);
  }
}




