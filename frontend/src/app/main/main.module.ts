import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [PokemonListComponent],
  imports: [
    CommonModule,
    MatInputModule,
    SharedModule,
    MatIconModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModule {}
