import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortWars'
})
export class SortWarsPipe implements PipeTransform {

  transform(wars: any[], field: SortFields): any[] {

    return this.getSortedByField(wars, field);
  }

  getSortedByField(wars: any[], field: SortFields): any[] {
    switch (field) {
      case SortFields.Name: {
        wars.sort((w1, w2) => w1.name.toLowerCase() > w2.name.toLowerCase() ? 1 : -1)
        return wars;
      }
      case SortFields.Aggressor: {
        return wars
      }
      case SortFields.Victim: {
        return wars
      }
      case SortFields.StartDate: {
        wars.sort((w1, w2) => new Date(w1.startDate).getTime() > new Date(w2.startDate).getTime() ? 1 : -1)
        return wars;
      }
      case SortFields.EndDate: {
        return wars
      }
      default: {
        return wars
      }
    }
  }
}


export enum SortFields {
  Name = 'name',
  Aggressor = 'aggressor',
  Victim = 'victim',
  StartDate = 'startDate',
  EndDate = 'endDate'
}
