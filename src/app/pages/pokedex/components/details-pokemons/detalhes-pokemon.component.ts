import { Component } from "@angular/core";
import { COLORS_TYPE } from 'src/app/shared/enum/colors.enum';

@Component({
    selector: 'app-detalhes_pokemon',
    templateUrl: '../details-pokemons/detalhes-pokemon.component.html',
    styleUrls: ['../details-pokemons/detalhes-pokemon.component.scss']
  })
  export class DetalhesPokemonComponent {
    colors: any = COLORS_TYPE;   

    pokemon:any = {
      nome: 'Bulbasauro',
      id: '001',
      tipos: ['Grass', 'Poison'],
      img: 'assets/images/buba.png',
      fraquezas: ['Fire', 'Eletric']
    }
    
  }