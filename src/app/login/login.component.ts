import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = {
    id: 1,
    user: 'demo',
    password: 'password',
    authentication: false,
  };]

  constructor() {}

  onSubmit(x, y) {
    if (this.user.user === x && this.user.password === y) {
      this.user.authentication = true;
      console.log(this.user.authentication);
    } else {
      alert('Nome Utente o Password Errati');
      console.log(this.user.authentication);
    }
  }

  ngOnInit(): void {}
}
