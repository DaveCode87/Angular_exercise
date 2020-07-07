import { PersonService } from './../person.service';
import { Component, OnInit } from '@angular/core';
import { Person } from '../person/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  listPerson: Person[];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(): void {
    console.log(this.personService);
    this.listPerson = this.personService.getPerson();
  }
}
