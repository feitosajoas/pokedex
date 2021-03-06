import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { PokemonDetail } from './../../core/models/poemon-detail.model';

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
