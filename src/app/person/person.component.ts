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
    this.getAll();
  }

  getAll(): void {
    this.listPerson = this.personService.getPerson();
    console.log('All', this.listPerson);
  }

  getActivePerson(): void {
    let active = this.personService.getPerson();

    let activeList = active.filter((Person) => Person.active === true);

    this.listPerson = activeList;

    console.log('active', this.listPerson);
  }

  getInactivePerson(): void {
    let inactive = this.personService.getPerson();

    let inactiveList = inactive.filter((Person) => Person.active === false);

    this.listPerson = inactiveList;

    console.log('inactive', this.listPerson);
  }
}
