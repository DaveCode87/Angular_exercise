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

  searchName: string;
  searchId: number;
  searchState: boolean;
  adoption: boolean = false;

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

  add(
    name: string,
    race: string,
    age: number,
    votes: number,
    adoption: boolean
  ): void {
    name = name.trim();
    race = race.trim();
    let image = '../../assets/images/150.png';
    if (!name) {
      return;
    }
    this.animalService
      .add({ name, race, age, votes, image, adoption } as Animal)
      .subscribe((animal) => {
        this.animals.push(animal);
      });
  }
}
