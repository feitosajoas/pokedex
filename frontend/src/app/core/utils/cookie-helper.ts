export class CookieHelper {
  static setFavoritePokemon(id: string) {
    localStorage.setItem(id, id);
  }

  static unFavoritePokemon(id: string) {
    localStorage.removeItem(id);
  }

  static getFavoritePokemons(id: string): string {
    return localStorage.getItem(id) ?? '';
  }
}
