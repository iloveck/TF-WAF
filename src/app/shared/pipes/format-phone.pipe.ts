import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhone'
})
export class FormatPhonePipe implements PipeTransform {

  transform(value: string): string {
    const phoneCleaned = ('' + value).replace(/\D/g, '');
    const phoneMatch = phoneCleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (phoneMatch) {
      const intrlCode = (phoneMatch[1] ? '+1 ' : '');
      return [intrlCode, '(', phoneMatch[2], ') ', phoneMatch[3], '-', phoneMatch[4]].join('');
    }
    return null;
  }

}
