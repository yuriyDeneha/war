import { War } from './models/war.model';
import { Component } from '@angular/core';
import { Participant, Agressor, Defender } from './models/participant.model';
import { Military } from './models/military.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'war';



  translationENobject = {
    header: {
      cards: "Cards",
      businessAccount: "Business account"
    },
    getPhoneSection: {

    }
  }

  translationUAobject = {
    header: {
      cards: "Картки",
      businessAccount: "Бізнес аккаунт"
    },
    getPhoneSection: {

    }
  }

  date = Date.now();
  formattedDate: string;

  language: "EN" | "UA" = "UA"




  constructor() {

      const usa = new Agressor({name: 'Usa country'});
    const poland = new Participant({name: 'Poland country'});
    const ukraine = new Participant({name: 'Ukraine country'});

    const russia = new Agressor({name: 'Russia country'});
    const ukraineDefender = new Defender();
    const usaAgressorToIran = new Agressor();

    const military = new Military();

    const usaRussiaWar = new War(usa, usa);


    usaRussiaWar.start();
  }

  changeLanguage(language: "EN" | "UA") {
    this.language = language;
    this.date = Date.now();
  }

  formtDate(date: number): string {
    return new Date(date).toLocaleString();
  }
}
