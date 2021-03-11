import { Injectable } from "@angular/core";
import { Calculation } from "./calculation.model";

export class CalculationService {

  private calcCompleted : boolean = false;

  private currentCalculation : Calculation = { schnee: 0, wetter :"", temperatur: 0,schnee_tal:0,schnee_berg:0,tourenart :""};

  public setCurrentCalculation(calc : Calculation) {
    this.currentCalculation = calc;
  }

  public calculate(){
    var points = 0;
    if (this.currentCalculation != null){

        // Punkte für Neuschnee
        var schnee = this.currentCalculation.schnee;
        if (schnee > 10) {
          points += 1;
        }
        if (schnee > 20) {
          points += 1;
        }
    }
    return points;
  }


}
