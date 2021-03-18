import { Component, OnInit } from '@angular/core';
import { CalculationService } from './shared/calculation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ski-o-meter';

  calcCompleted : boolean = true;

  constructor(private calculationService : CalculationService) { }

  ngOnInit(): void {
    this.calculationService.calculationReadey.subscribe(
      (calcReady : boolean) => this.calcCompleted = calcReady
    );
  }
}
