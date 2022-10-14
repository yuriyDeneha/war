import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-languages-selector',
  templateUrl: './languages-selector.component.html',
  styleUrls: ['./languages-selector.component.scss']
})
export class LanguagesSelectorComponent implements OnInit {


  @Input() language: "UA" | "EN";

  @Output() languageChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  languageChange(event: any) {
    const language = event.srcElement.value;
    this.languageChanged.emit(language);
  }

}
