import { Component, OnInit } from "@angular/core";
import { COLORS_TYPE } from 'src/app/shared/enum/colors.enum';
import { ICON_TYPES } from "src/app/shared/enum/icones.enum";
import { PokemonService } from "./lista-pokemon.service";

interface IOrdenacao {
  value: number;
  viewValue: string;
}


@Component({
  selector: 'app-lista_pokemon',
  templateUrl: '../list-pokemons/lista-pokemons.component.html',
  styleUrls: ['../list-pokemons/lista-pokemon.component.scss']
})
export class ListaPokemonComponent implements OnInit {
  colors: any = COLORS_TYPE;
  tiposPokemon: any = ICON_TYPES;

  tiposOrdenacao: IOrdenacao[] = [
    { value: 1, viewValue: 'Nome' },
    { value: 2, viewValue: 'ID' },
    { value: 3, viewValue: 'Tipo' }
  ];


  resultadoRequisicao: any[] = [
    {
      nome: 'bulbasaur',
      id: '001',
      tipos: ['Grass', 'Poison'],
      img: 'assets/images/buba.png'
    },
    {
      nome: 'ditto',
      id: '002',
      tipos: ['Fire', 'Fight'],
      img: 'assets/images/charizard.png'
    },
    {
      nome: 'mewtwo',
      id: '003',
      tipos: ['Poison', 'Poison'],
      img: 'assets/images/buba.png'
    },
    {
      nome: 'charizard',
      id: '004',
      tipos: ['Water', 'Poison'],
      img: 'assets/images/charizard.png'
    },
    {
      nome: 'squirtle',
      id: '005',
      tipos: ['Eletric', 'Poison'],
      img: 'assets/images/buba.png'
    },
    {
      nome: 'Bulbasauro',
      id: '004',
      tipos: ['Water', 'Poison'],
      img: 'assets/images/charizard.png'
    },
    {
      nome: 'Squirtle',
      id: '005',
      tipos: ['Eletric', 'Poison'],
      img: 'assets/images/buba.png'
    },
    {
      nome: 'Charizard',
      id: '006',
      tipos: ['Poison', 'Poison'],
      img: 'assets/images/charizard.png'
    },
    {
      nome: 'Bulbasauro',
      id: '007',
      tipos: ['Poison', 'Poison'],
      img: 'assets/images/buba.png'
    },
    {
      nome: 'Charizard',
      id: '008',
      tipos: ['Fire', 'Poison'],
      img: 'assets/images/buba.png'
    },
    {
      nome: 'pikachu',
      id: '009',
      tipos: ['Water', 'Poison'],
      img: 'assets/images/charizard.png'
    },
    {
      nome: 'digtrio',
      id: '010',
      tipos: ['Eletric', 'Poison'],
      img: 'assets/images/buba.png'
    },
    {
      nome: 'charmander',
      id: '011',
      tipos: ['Fire', 'Poison'],
      img: 'assets/images/charizard.png'
    },
    {
      nome: 'Squirtle',
      id: '012',
      tipos: ['Water', 'Poison'],
      img: 'assets/images/buba.png'
    },
    {
      nome: 'ponyta',
      id: '013',
      tipos: ['Fire', 'Poison'],
      img: 'assets/images/buba.png'
    },
    {
      nome: 'Squirtle',
      id: '014',
      tipos: ['Fire', 'Poison'],
      img: 'assets/images/charizard.png'
    },
    {
      nome: 'Squirtle',
      id: '015',
      tipos: ['Water', 'Poison'],
      img: 'assets/images/buba.png'
    },
    {
      nome: 'Squirtleee',
      id: '016',
      tipos: ['Poison', 'Poison'],
      img: 'assets/images/charizard.png'
    },
    {
      nome: 'Squirtle',
      id: '017',
      tipos: ['Water', 'Poison'],
      img: 'assets/images/buba.png'
    }
  ]


  valorDigitado: string = '';
  pokemonsFiltrados: any[];

  constructor(
    private pokemonService: PokemonService
  ) {
    this.pokemonsFiltrados = this.resultadoRequisicao;
  }

  ngOnInit(): void {
    this.buscarTodosPokemons();
  }

  filtrarPokemons() {
    if (this.valorDigitado) {
      this.pokemonsFiltrados = this.resultadoRequisicao.filter(pokemon =>
        pokemon.nome.toLowerCase().includes(this.valorDigitado.toLowerCase())
      );
    } else {
      this.pokemonsFiltrados = this.resultadoRequisicao;
    }
  }

  buscarTodosPokemons() {
    this.pokemonService.getAll().subscribe(res => console.log(res));
  }

}