import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    SharedModule
  ],
  declarations: [PokemonListComponent],
})
export class MainModule { }
