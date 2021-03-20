import { Injectable, EventEmitter } from "@angular/core";
import { Calculation } from "./calculation.model";

export class CalculationService {

  currentCalculation : Calculation = {points: 0, schnee: 0, wetter :"", temperatur: 0,schnee_tal:0,schnee_berg:0,tourenart :""};

  public setCurrentCalculation(calc : Calculation) {
    this.currentCalculation = calc;
  }

  calculationReadey = new EventEmitter<boolean>();

  public calculate(){
    var points = 0;
    if (this.currentCalculation != null){

        // Punkte für Neuschnee
        var schnee = this.currentCalculation.schnee;
        if (schnee >= 10) {
          points += 1;
          console.log("Schnee/10 +1. Punkte: "+points);
        }
        if (schnee >= 20) {
          points += 1;
          console.log("Schnee/20 +1. Punkte: "+points);
        }

        // Punkte für Wetter
        var wetter = this.currentCalculation.wetter;
        if (wetter == "Schönster Sonnenschein") {
          points += 2;
          console.log("Wetter/Sonne +2. Punkte: "+points);
        } else if (wetter ==  "Es soll schneien"){
          points += 1;
          console.log("Wetter/Schnee +1. Punkte: "+points);
        }

        // Punkte für Temperatur
        var temp = this.currentCalculation.temperatur;
        if (temp < 0) {
          points += 1;
          console.log("Temperatur +1. Punkte: "+points);
        }

        // Punkte Schneemenge Tal
        var schneeTal = this.currentCalculation.schnee_tal;
        if (schneeTal >= 20 ) {
          points += 1;
          console.log("Schnee/Tal +1. Punkte: "+points);
        }

        // Punkte Schneemenge Berg
        var schneeBerg = this.currentCalculation.schnee_berg;
        if (schneeTal >= 50 ) {
          points += 1;
          console.log("Schnee/Berg +1. Punkte: "+points);
        }

        // Punkte Tourenart
        var type = this.currentCalculation.tourenart;
        if (type == "Pistentour"){
          points += 1;
          console.log("Pistentour +1. Punkte: "+points);
        }
    }
    this.currentCalculation.points = points;
    this.calculationReadey.emit(true);
    console.log("Punkte gesamt: "+points);
    return points;
  }
}
