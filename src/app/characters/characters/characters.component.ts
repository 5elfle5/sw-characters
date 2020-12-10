import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  data: string;
  constructor(
    private starWarsService: StarWarsService,
  ) { }

  ngOnInit(): void {
    this.starWarsService.getCharacters().subscribe((response) => {
      this.data = response;
    });
  }

}
