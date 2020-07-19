import { USER } from './../../model/mock-data/mock-user';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user = USER;

  constructor() {}

  getUser(): Observable<User[]> {
    return of(this.user);
  }
}
