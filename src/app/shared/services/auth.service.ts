import { USER } from './../../model/mock-data/mock-user';
import { User } from './../../user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userList(): User[] {
    return USER;
  }

  constructor() {}
}
