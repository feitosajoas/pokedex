export class PokemonList {
  name: string;
  url!: any;
  count!: number;
  results: any;

  constructor() {
      this.name = '';
      this.url = null;
  }
}
