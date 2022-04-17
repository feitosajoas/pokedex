import { PokemonDetail } from './../../core/models/poemon-detail.model';
import { PokemonList } from './../../core/models/pokemon-list.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: PokemonDetail[] = [];
  page = 1;
  totalPokemons!: number;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.dataService
      .getAllPokemons(12, this.page + 0)
      .pipe(
        tap((data) => {
          this.totalPokemons = data.count;
          data.results.forEach((result: PokemonDetail) => {
            this.dataService
              .getDetail(result.name)
              .pipe(
                tap((response) => {
                  this.pokemons.push(response);
                  console.log(this.pokemons);
                })
              )
              .subscribe();
          });
        })
      )
      .subscribe();
  }
}
