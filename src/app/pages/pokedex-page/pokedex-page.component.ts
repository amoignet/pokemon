import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../shared/pokemon';
import { PokedexService } from '../../shared/pokedex.service';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.scss']
})
export class PokedexPageComponent implements OnInit {

  pokemons: Pokemon[];
  detail: string;



  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
    this.pokemons = this.pokedexService.getPokemons()
  }

  description(addDescription) {
  this.detail = addDescription.description;
  }
}
