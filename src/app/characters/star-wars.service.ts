import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class StarWarsService {

  constructor(
    private http: HttpClient,
  ) { }

  getCharacters(): Observable<string> {
    return this.http.get('/api/?api=people%2F1').pipe(
      tap((x) => { console.debug(x); }),
      map(x => JSON.stringify(x)),
    );
  }
}
