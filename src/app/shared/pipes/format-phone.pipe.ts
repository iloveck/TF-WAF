import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhone'
})
export class FormatPhonePipe implements PipeTransform {

  transform(value: string): string {
    var phoneCleaned = ('' + value).replace(/\D/g, '')
    var phoneMatch = phoneCleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
    if (phoneMatch) {
      var intrlCode = (phoneMatch[1] ? '+1 ' : '')
      return [intrlCode, '(', phoneMatch[2], ') ', phoneMatch[3], '-', phoneMatch[4]].join('')
    }
    return null
  }

}
