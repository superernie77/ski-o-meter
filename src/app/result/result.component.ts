import { Component, OnInit } from '@angular/core';
import { CalculationService } from '../shared/calculation.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  constructor(private calculationService : CalculationService) { }

  reset(){
    this.calculationService.calculationReadey.emit(false);
  }

  getPoints(){
    return this.calculationService.currentCalculation.points;
  }

}
