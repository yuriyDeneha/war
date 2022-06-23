import { Military } from "./military.model";
import { Weapon } from "./weapon.mode";

export class Participant {
  name: string;
  weapons: Weapon[];
  military: Military[];
  public goal: string;

  constructor (participant: Partial<Participant> = {}) {
    this.name = participant.name;
    this.weapons = participant.weapons;
    this.military = participant.military;
  }
}

export class Agressor extends Participant{

  private setGoal (goal ) {
    this.goal = goal;
  }

  public attacks(participant: Participant) {

    console.log(this.name, 'attacks', participant.name)
    if (participant.name === this.name){
      throw new Error ('agressor cannor attacks himself')
    }
    Defender.turnParticipantToDefend(participant);
  }
}

export class Defender extends Participant {

  static goal = "Survice & defend teritory & resources";

  constructor (participant: Partial<Participant> = {}) {
    super(participant);
  }

  static turnParticipantToDefend(participant: Participant) {
    participant.goal = Defender.goal;
    console.log(participant.name, 'become defender')

    return new Defender(participant)
  }
}

