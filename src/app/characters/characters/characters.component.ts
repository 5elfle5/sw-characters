import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  data: Observable<string>;
  constructor(
    private starWarsService: StarWarsService,
  ) { }

  ngOnInit(): void {
    this.data = this.starWarsService.getPerson(1);
  }

}
