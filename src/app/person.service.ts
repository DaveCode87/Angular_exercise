import { Person } from './person/person';
import { PERSON } from './mock-person';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  listPerson = PERSON;

  constructor() {}

  getPerson(): Person[] {
    return this.listPerson;
  }
}
