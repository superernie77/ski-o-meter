import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  weatherOptions = ["","Schönster Sonnenschein","Bedeckt und wolkig","Es soll regnen", "Es soll schneien"];

  typeOptions = ["","Pistentour","fahren im Gelände"];

  constructor() { }

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
  }

}
