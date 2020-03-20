import { PathLocationStrategy } from '@angular/common';
import { Injectable } from '@angular/core';
import { LogService } from '@service/log-service';
//import { NotificationService } from '@service/notification.service';
import * as StackTrace from 'stacktrace-js';

@Injectable()
export class Logger {
  constructor(private logService: LogService
    //,private notificationService: NotificationService
  ) {
  }

  logNShowErrorMessage(error, displayMessage?: string) {
    this.showErrorMessage(displayMessage);
    this.logError(error);
  }

  showErrorMessage(displayMessage) {
    try {
      //this.notificationService.error.next(displayMessage);
    } catch (error) {
      console.log(error);
    }
  }

  logError(error) {
    try {
      const url = location instanceof PathLocationStrategy
        ? location.path() : '';
      const message = error.message ? error.message : error.toString();
      // get the stack trace, lets grab the last 10 stacks only
      StackTrace.fromError(error).then(stackframes => {
        const stackString = stackframes
          .splice(0, 20)
          .map(function (sf) {
            return sf.toString();
          }).join('\n');
        this.postLog({ message: message, url: url, stackTrace: stackString });
      }).catch(() => {
        this.postLog({ message: message, url: url, stackTrace: 'Not able to stack trace the error' });
      });
    } catch (error) {
      console.log(error);
    }
  }

  showSuccessMessage(message: string) {
    //this.notificationService.success.next(message);
  }
  showWarningMessage(message: string) {
    //this.notificationService.warning.next(message);
  }
  showInfoMessage(message: string) {
    //this.notificationService.info.next(message);
  }

  private postLog(error) {
    // this.logService.error(error)((error) => {
    //   console.log('Error occurred while logging error.');
    // });
  }
}
