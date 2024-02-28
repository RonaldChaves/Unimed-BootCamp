import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArr = [
      {firstName: 'Ronald', lastName: 'Chaves', age: 19},
      {firstName: 'Camily', lastName: 'Oliveira', age: 15},
      {firstName: 'Cintia', lastName: 'Aparecida', age: 50},
      {firstName: 'Ronaldo', lastName: 'Rodrigues', age: 56},
    ]
    return of(peopleArr);
  }
}
