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

  constructor() {

      const usa = new Agressor({name: 'Usa country'});
    const poland = new Participant({name: 'Poland country'});
    const ukraine = new Participant({name: 'Ukraine country'});

    const russia = new Agressor({name: 'Russia country'});
    const ukraineDefender = new Defender();
    const usaAgressorToIran = new Agressor();

    const military = new Military();

    const usaRussiaWar = new War({agressor: usa, victim: usa});


    usaRussiaWar.start();
  }
}
