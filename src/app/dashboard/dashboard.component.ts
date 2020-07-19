import { AnimalService } from './../shared/services/animal.service';
import { Animal } from '../animal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  animals: Animal[] = [];

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.getAnimal();
  }
  getAnimal(): void {
    this.animalService
      .getTopRated(6)
      .subscribe((animals) => (this.animals = animals));
  }
}
