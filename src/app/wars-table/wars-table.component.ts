import { Component, OnInit } from '@angular/core';
import { SortFields } from '../pipes/sort-wars.pipe';

@Component({
  selector: 'app-wars-table',
  templateUrl: './wars-table.component.html',
  styleUrls: ['./wars-table.component.scss']
})
export class WarsTableComponent implements OnInit {
  wars = [
    {
      name: 'Ukrainina russian War',
      aggressor: 'russia',
      victim: 'Ukraine',
      startDate: new Date('2022-02-24'),
      endDate: new Date(),
    },
    {
      name: 'USA russian War',
      aggressor: 'USA',
      victim: 'russia',
      startDate: new Date('2021-05-04'),
      endDate: new Date(),
    },
    {
      name: 'USA Japan War',
      aggressor: 'USA',
      victim: 'Japan',
      startDate: new Date('1956-04-21'),
      endDate: new Date(),
    }
  ];

  SortFields = SortFields;

  constructor() { }

  ngOnInit(): void {
  }

}
