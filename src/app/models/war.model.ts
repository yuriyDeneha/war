import { Military } from './military.model';
import { Agressor, Defender, Participant } from './participant.model';

export class War {

  agressor: Agressor;
  victim: Participant;

  constructor(agressor, victim) {
    this.agressor = agressor
    this.victim = victim
  }

  start() {

    console.log('WAR HAS STARTED between', this.agressor.name, this.victim.name);

    try {
      this.agressor.attacks(this.victim);
    } catch (err) {
      console.log(err);
    }
  }
}
