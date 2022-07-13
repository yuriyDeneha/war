import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { War } from 'src/app/models/war.model';

@Component({
  selector: 'app-wars-table-row',
  templateUrl: './wars-table-row.component.html',
  styleUrls: ['./wars-table-row.component.scss']
})
export class WarsTableRowComponent implements OnInit {

  @Input() war: any;
  @Output() warChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
