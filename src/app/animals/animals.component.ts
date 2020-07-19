import { ANIMALS } from './../model/mock-data/mock-animal';
import { AnimalService } from '../shared/services/animal.service';
import { Animal } from '../animal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
})
export class AnimalsComponent implements OnInit {
  animals: Animal[] = [];

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.getAnimal();
  }
  getAnimal(): void {
    this.animalService
      .getTopRated(10)
      .subscribe((animals) => (this.animals = animals));
  }
}
