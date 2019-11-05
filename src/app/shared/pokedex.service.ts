import { Pokemon } from './pokemon';
import { Injectable } from '@angular/core';
import { POKEMONS } from './pokemon-mock';

@Injectable({
  providedIn: 'root'
})



export class PokedexService {

  POKEMONS:Pokemon[]


  constructor() { }

  getPokemons(): Pokemon[] {
    return POKEMONS;
  }

  addPokemon(animal: Pokemon) {
    POKEMONS.push(animal)
  }

}
