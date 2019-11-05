import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../../shared/pokemon";
import { PokedexService } from "../../shared/pokedex.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-pokemon-page",
  templateUrl: "./create-pokemon-page.component.html",
  styleUrls: ["./create-pokemon-page.component.scss"]
})
export class CreatePokemonPageComponent implements OnInit {
  animal: Pokemon;

  constructor(private service: PokedexService, private router: Router) {}

  ngOnInit() {
    this.animal = new Pokemon();
  }

  createPokemon() {
    const newPokemon: Pokemon = { ...this.animal };
    this.service.addPokemon(newPokemon);
    this.router.navigate(["/pokemon"]);
  }
}
