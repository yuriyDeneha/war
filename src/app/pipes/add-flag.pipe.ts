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
        return 'π―π΅'
      }
      case CountryEnum.USA: {
        return 'πΊπΈ'
      }
      case CountryEnum.Ukraine: {
        return 'πΊπ¦'
      }
      case CountryEnum.Russia: {
        return 'π·πΊ'
      }
      default: {
        return 'π³οΈ'
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
