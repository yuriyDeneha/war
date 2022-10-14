import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Input() translation: { header: { cards: string, businessAccount: string} };

  constructor() { }

  ngOnInit(): void {
  }

}
