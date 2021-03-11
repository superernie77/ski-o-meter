export class Calculation {

  schnee : number;

  wetter : string;

  temperatur : number;

  schnee_tal : number;

  schnee_berg : number;

  tourenart : string;

  constructor(schnee : number, wetter : string, temperatur : number,schnee_tal : number , schnee_berg : number, tourenart : string) {
    this.schnee = schnee;
    this.wetter = wetter;
    this.temperatur = temperatur;
    this.schnee_tal = schnee_tal;
    this.schnee_berg = schnee_berg;
    this.tourenart = tourenart;

  }

}
