import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  imports: [CommonModule, MatInputModule, SharedModule],
  declarations: [PokemonListComponent]
})
export class MainModule {}
