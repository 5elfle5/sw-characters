import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/shared/models/person.model';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  people$: Observable<Person[]>;

  constructor(
    private starWarsService: StarWarsService,
  ) { }

  ngOnInit(): void {
    this.people$ = this.starWarsService.getPeople();
  }

}
