import { ANIMALS } from './../../model/mock-data/mock-animal';
import { Animal } from '../../animal';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  animals = ANIMALS;
  private animalsUrl = 'api/animals';
  constructor(private http: HttpClient) {}

  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.animalsUrl);
  }

  getTopRated(numElm: number): Observable<Animal[]> {
    return of(this.animals.sort((a, b) => b.votes - a.votes).slice(0, numElm));
  }

  getAnimal(id: number): Observable<Animal> {
    /*return of(ANIMALS.find((animal) => animal.id === id));*/
    const url = `${this.animalsUrl}/:${id}`;
    return this.http.get<Animal>(url);
  }
}
