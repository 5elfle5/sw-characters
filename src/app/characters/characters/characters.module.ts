import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { StarWarsService } from '../star-wars.service';


@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ],
  providers: [StarWarsService],
})
export class CharactersModule { }
