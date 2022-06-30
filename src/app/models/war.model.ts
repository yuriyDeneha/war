import { Agressor, Participant } from './participant.model';

export class War {

  agressor?: Agressor;
  victim: Participant;

  constructor(agressor: Agressor, victim: Participant) {
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
