import { ANIMALS } from './../../model/mock-data/mock-animal';
import { Animal } from '../../animal';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  animals = ANIMALS;
  constructor() {}

  getAnimals(): Observable<Animal[]> {
    return of(ANIMALS);
  }

  getTopRated(numElm: number): Observable<Animal[]> {
    return of(this.animals.sort((a, b) => b.votes - a.votes).slice(0, numElm));
  }

  getAnimal(id: number): Observable<Animal> {
    return of(ANIMALS.find((animal) => animal.id === id));
  }
}
