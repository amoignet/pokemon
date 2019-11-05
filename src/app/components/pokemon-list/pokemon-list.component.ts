import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../shared/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})


export class PokemonListComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Output() addDescription = new EventEmitter<Pokemon>();



  constructor() { }

  ngOnInit() {

  }
  pokemonClick() {
    this.addDescription.emit(this.pokemon);
  }
}
