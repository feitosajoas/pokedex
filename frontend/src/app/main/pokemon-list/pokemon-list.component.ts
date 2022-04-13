import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getAllPokemons()
      .pipe(
        tap((data) => {
          data.results.forEach((result: any) => {
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
