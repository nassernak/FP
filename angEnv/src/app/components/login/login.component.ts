import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(e) {
  	e.preventDefault();
  	const target = e.target;
  	const email = target.querySelector('[name="email"]').value;
  	const pass = target.querySelector('[name="pass"]').value;
  	if (email === pass) {
  		// window.location.href = "localhost:8000/admin/login/?next=/admin/";
 		this.router.navigateByUrl('profile');
  	}
  	else {
  		console.log('Try Again!');
  	}
  }

}
