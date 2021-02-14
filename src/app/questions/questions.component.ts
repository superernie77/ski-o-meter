import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  //@ViewChild('f') slForm : NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onClear(){
   // this.slForm.reset();
  }

  onSubmit(f : NgForm){}

}
