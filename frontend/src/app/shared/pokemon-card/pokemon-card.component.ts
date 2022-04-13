import { Component, Input } from '@angular/core';

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
}
