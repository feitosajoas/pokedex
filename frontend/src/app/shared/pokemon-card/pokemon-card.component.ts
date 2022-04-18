import { Component, Input, OnInit } from '@angular/core';
import { CookieHelper } from 'src/app/core/utils/cookie-helper';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() name: string = '';
  @Input() image: string = '';
  @Input() height: number = 0;
  @Input() types: any[] = [];
  @Input() health: any;
  @Input() attackPower: number = 0;
  isFavorite: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.hasFavorite();
  }

  getName() {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }

  onFavorite(name: string) {
    this.isFavorite = true;
    return CookieHelper.setFavoritePokemon(name);
  }

  unFavorite(name: string) {
    this.isFavorite = false;
    return CookieHelper.unFavoritePokemon(name);
  }

  hasFavorite() {
    return CookieHelper.getFavoritePokemons(this.name) ? (this.isFavorite = true) : (this.isFavorite = false);
  }
}
