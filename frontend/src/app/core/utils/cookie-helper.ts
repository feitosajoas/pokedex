import { Cookie } from '../models/cookie.model';

export class CookieHelper {
  static cookieName = 'cpc_sc';
  static favPokemon = 'fav_c';

  static setAllPermissions() {
    localStorage.setItem(
      this.cookieName,
      JSON.stringify({
        strictlyNecessary: true,
        functional: true,
        targetting: true,
        performance: true
      })
    );
  }

  static setFavoritePokemon(id: string) {
    localStorage.setItem(this.favPokemon, this.getFavoritePokemons() + `|${id}`);
  }

  static getFavoritePokemons(): string {
    return localStorage.getItem(this.favPokemon) ?? '';
  }

  static setPermissions(cookie: Cookie) {
    localStorage.setItem(this.cookieName, JSON.stringify(cookie));
  }

  static getCookie() {
    const cookieString = localStorage.getItem(this.cookieName);
    if (cookieString) {
      return JSON.parse(cookieString);
    }
    return {
      strictlyNecessary: true,
      functional: false,
      targetting: false,
      performance: false
    };
  }

  static checkCookie() {
    return localStorage.getItem(this.cookieName) ? false : true;
  }
}
