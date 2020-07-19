import { LoginService } from './shared/services/login.service';
import { User } from './user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: User[];

  auth = false;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    console.log('dentro il get user');
    this.loginService.getUser().subscribe((user) => (this.user = user));
    console.log('authentication', this.user[0].authentication);
  }

  logout() {
    this.user[0].authentication = false;
  }
}
