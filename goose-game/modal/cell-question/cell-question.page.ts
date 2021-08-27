import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-cell-question',
  templateUrl: './cell-question.page.html',
  styleUrls: ['./cell-question.page.scss'],
})
export class CellQuestionPage implements OnInit {
  question: any;
  answers = [];

  constructor(
    private navParams: NavParams
  ) { }

  ngOnInit() {
    this.question = this.navParams.get('question');
    console.log('this.question:', this.question);

    this.answers.push(this.question.a1, this.question.a2, this.question.a3);
    this.shuffleAnswers();
  }

  shuffleAnswers() {
    for (var i = this.answers.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.answers[i];
      this.answers[i] = this.answers[j];
      this.answers[j] = temp;
    }
  }

  radioGroupChange(event) {
    console.log("radioGroupChange", event.detail);
    if (event.detail.value === this.question.a1) {
      console.log("RISPOSTA CORRETTA");
      document.getElementById(event.detail.value).classList.add("correct-answer");
    }
    else {
      console.log("RISPOSTA ERRATA");
      document.getElementById(event.detail.value).classList.add("wrong-answer");
      document.getElementById(this.question.a1).classList.add("correct-answer");
    }
  }
}
