export class Military {
  name: string;
  status: MilitaryStatus;
  age: number;
  experience: number;
  type: MilitaryTypes;
}

export enum MilitaryStatus {
  Sergant,
  Leitanant,
  Comannder
}

export enum MilitaryTypes {
  Navy,
  Specnaz
}
