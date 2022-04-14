import { Component, Input } from '@angular/core';
import { CookieHelper } from 'src/app/core/utils/cookie-helper';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() name: string = '';
  @Input() image: string = '';
  @Input() height: number = 0;
  @Input() types: any[] = [];
  @Input() health: any;
  @Input() attackPower: number = 0;
  constructor() {}

  getName() {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }

  onFavorite(name: string) {
    if (CookieHelper.getFavoritePokemons().includes(name)) {
      return CookieHelper.getFavoritePokemons().replace(name, '');
    }
    return CookieHelper.setFavoritePokemon(name);
  }
}
