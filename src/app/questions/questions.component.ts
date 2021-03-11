import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Calculation } from '../shared/calculation.model';
import { CalculationService } from '../shared/calculation.service';

@Injectable()
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  weatherOptions = ["","Schönster Sonnenschein","Bedeckt und wolkig","Es soll regnen", "Es soll schneien"];

  typeOptions = ["","Pistentour","fahren im Gelände"];

  constructor(private calculationService : CalculationService) { }

  ngOnInit(): void {
  }

  onClear(f : NgForm){
    console.log("clear works");
    f.reset();
  }

  onSubmit(f : NgForm){
    const value = f.value;
    console.log("Schnee: "+value.schnee);
    console.log("Wetter: "+value.wetter);
    console.log("Temperatur: "+value.temperatur);
    console.log("Schnee im Tal: "+value.schnee_tal);
    console.log("Schnee am Berg: "+value.schnee_berg);
    console.log("Art der Tour am Berg: "+value.tourenart);

    var calc = new Calculation(value.schnee,value.wetter,+value.temperatur,value.schnee_tal,value.schnee_berg,value.tourenart);

    this.calculationService.setCurrentCalculation(calc);
    var points = this.calculationService.calculate();

    console.log("Points: "+points);
  }

}
