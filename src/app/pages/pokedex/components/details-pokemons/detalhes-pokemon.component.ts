import { Component, OnInit } from "@angular/core";
import { COLORS_TYPE } from 'src/app/shared/enum/colors.enum';
import { ICON_TYPES } from "src/app/shared/enum/icones.enum";
import { PokemonService } from "../list-pokemons/lista-pokemon.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detalhes_pokemon',
  templateUrl: '../details-pokemons/detalhes-pokemon.component.html',
  styleUrls: ['../details-pokemons/detalhes-pokemon.component.scss']
})
export class DetalhesPokemonComponent implements OnInit {
  colors: any = COLORS_TYPE;
  tiposPokemon: any = ICON_TYPES;

  pokemon: any; 

  constructor(private pokemonService: PokemonService,
    private route: ActivatedRoute) {
    }

  ngOnInit(): void {
    this.buscarPokemon();
  }

  buscarPokemon() {
    this.pokemonService.getById(this.route.snapshot.params['nome']).subscribe(pokemon => this.pokemon = pokemon)
  }
}