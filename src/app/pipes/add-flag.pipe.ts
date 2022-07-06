import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addFlag'
})
export class AddFlagPipe implements PipeTransform {

  transform(country: string): unknown {

    const flag = this.getFlag(country as CountryEnum);
    return `${country} ${flag}`;
  }

  getFlag(country: CountryEnum) {
    switch (country) {
      case CountryEnum.Japan: {
        return '🇯🇵'
      }
      case CountryEnum.USA: {
        return '🇺🇸'
      }
      case CountryEnum.Ukraine: {
        return '🇺🇦'
      }
      case CountryEnum.Russia: {
        return '🇷🇺'
      }
      default: {
        return '🏳️'
      }
    }
  }

}

export enum CountryEnum {
  Russia = 'russia',
  Ukraine = 'Ukraine',
  USA = 'USA',
  Japan = 'Japan'
}
