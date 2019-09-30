import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(
    private question: QuestionService
  ) { }

  ngOnInit() {
    this.question.loadAllQuestion();
  }

}
