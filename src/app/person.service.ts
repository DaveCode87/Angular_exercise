import { Person } from './person/person';
import { PERSON } from './mock-person';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  person = PERSON;

  constructor() {}

  getPerson(): Observable<Person[]> {
    return of(this.person);
  }
}
