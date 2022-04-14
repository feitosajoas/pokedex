import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [PokemonListComponent],
  imports: [CommonModule, MatInputModule, SharedModule, MatIconModule]
})
export class MainModule {}
