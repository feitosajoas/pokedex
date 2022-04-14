import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [PokemonCardComponent],
  imports: [CommonModule, MatCardModule, MatBadgeModule, MatIconModule, MatGridListModule],
  exports: [PokemonCardComponent]
})
export class SharedModule {}
