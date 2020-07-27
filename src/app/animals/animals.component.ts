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
      .getAnimals()
      .subscribe((animals) => (this.animals = animals));
  }

  delete(animal: Animal): void {
    this.animals = this.animals.filter((a) => a !== animal);
    this.animalService.delete(animal).subscribe();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.animalService.add({ name } as Animal).subscribe((animal) => {
      this.animals.push(animal);
    });
  }
}
