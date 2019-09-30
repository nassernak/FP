import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private baseUrl = 'http://localhost:8000/polls/';

  constructor(private http: HttpClient) { }

  loadAllQuestion() {
    this.http.get<any>(`${this.baseUrl}`).subscribe(data => {
      console.log(JSON.parse(data));
    }, error => console.log('Could not load todos.'));
  }
}
