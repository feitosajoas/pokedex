import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [PokemonCardComponent],
  imports: [CommonModule, MatCardModule, MatBadgeModule],
  exports: [PokemonCardComponent]
})
export class SharedModule {}
