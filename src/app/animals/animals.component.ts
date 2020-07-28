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

  search: string;

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

  add(name: string, race: string, age: number, votes: number): void {
    name = name.trim();
    race = race.trim();
    let image = '../../assets/images/150.png';
    if (!name) {
      return;
    }
    this.animalService
      .add({ name, race, age, votes, image } as Animal)
      .subscribe((animal) => {
        this.animals.push(animal);
      });
  }
}
