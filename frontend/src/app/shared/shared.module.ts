import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [PokemonCardComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [PokemonCardComponent],
})
export class SharedModule { }
