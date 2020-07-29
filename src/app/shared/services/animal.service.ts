import { Animal } from '../../animal';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private animalsUrl = 'api/animals';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.animalsUrl).pipe(
      tap((_) => console.log('fetched animals')),
      catchError(this.handleError<Animal[]>('getAnimals', []))
    );
  }

  getAnimal(id: number): Observable<Animal> {
    const url = `${this.animalsUrl}/${id}`;
    return this.http.get<Animal>(url).pipe(
      tap((_) => console.log(`fetched animal id=${id}`)),
      catchError(this.handleError<Animal>(`getAnimal id=${id}`))
    );
  }

  update(animal: Animal): Observable<Animal> {
    return this.http
      .put<Animal>(this.animalsUrl, animal, this.httpOptions)
      .pipe(
        tap((_) => console.log(`updated animal id=${animal.id}`)),
        catchError(this.handleError<any>('updateAnimal'))
      );
  }

  delete(animal: Animal): Observable<Animal> {
    const id = typeof animal === 'number' ? animal : animal.id;
    const url = `${this.animalsUrl}/${id}`;

    return this.http.delete<Animal>(url, this.httpOptions).pipe(
      tap((_) => console.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Animal>('deleteAnimal'))
    );
  }

  add(animal: Animal): Observable<Animal> {
    return this.http
      .post<Animal>(this.animalsUrl, animal, this.httpOptions)
      .pipe(
        tap((newAnimal: Animal) =>
          console.log(`added animal id=${newAnimal.id}`)
        ),
        catchError(this.handleError<Animal>('addAnimal'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
