import { LoginService } from './../shared/services/login.service';
import { USER } from './../model/mock-data/mock-user';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User[];

  userLog: string;
  passwordLog: string;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    console.log('dentro il get user');
    this.loginService.getUser().subscribe((user) => (this.user = user));
    console.log('loginComponent', this.user[0].user);
  }

  onSubmit(userLog, passwordLog): void {
    if (
      this.user[0].user === userLog &&
      this.user[0].password === passwordLog
    ) {
      alert(`benvenuto ${this.user[0].user}`);
      this.user[0].authentication = true;
      console.log('authentication', this.user[0].authentication);
    } else {
      alert('Nome Utente o Password Errati');
      console.log('authentication', this.user[0].authentication);
    }
  }
}
