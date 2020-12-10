import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const API_URL = 'http://localhost:3000';
@Injectable()
export class StarWarsService {
  constructor(
    private http: HttpClient,
  ) { }

  getPerson(id: number): Observable<string> {
    return this.http.get(`${API_URL}?resource=people%2F${id}`).pipe(
      tap((x) => { console.debug(x); }),
      map(x => JSON.stringify(x)),
    );
  }
}
