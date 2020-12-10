import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Person } from '../shared/models/person.model';
import { Collection } from '../shared/models/collection.model';

const API_URL = 'http://localhost:3000';
@Injectable()
export class StarWarsService {
  constructor(
    private http: HttpClient,
  ) { }

  getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(`${API_URL}/?api=people%2F${id}`);
  }

  getPeople(): Observable<Person[]> {
    return this.http.get<Collection<Person>>(`${API_URL}/?api=people`).pipe(
      map(response => response.results)
    );
  }
}
