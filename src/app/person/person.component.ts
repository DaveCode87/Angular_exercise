import { PERSON } from './../mock-person';
import { Component, OnInit } from '@angular/core';
import { Person } from '../person/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  listPerson = PERSON;

  constructor() {}

  ngOnInit(): void {
    console.log(this.listPerson);
  }
}
