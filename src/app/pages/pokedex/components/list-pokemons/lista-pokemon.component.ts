import { Component } from "@angular/core";
import { COLORS_TYPE } from 'src/app/shared/enum/colors.enum';

interface IOrdenacao {
  value: number;
  viewValue: string;
}


@Component({
    selector: 'app-lista_pokemon',
    templateUrl: '../list-pokemons/lista-pokemons.component.html',
    styleUrls: ['../list-pokemons/lista-pokemon.component.scss']
  })
  export class ListaPokemonComponent {
    
    colors: any = COLORS_TYPE
    
    tiposOrdenacao: IOrdenacao[] = [
      {value: 1, viewValue: 'Nome'},
      {value: 2, viewValue: 'ID'},
      {value: 3, viewValue: 'Tipo'}
    ];
    
    
  resultadoRequisicao: any[] = [
    {
      nome: 'Bulbasauro',
      id: '001',
      tipos: ['Grass', 'Poison'],
      img: 'assets/images/buba.png'
    },
    {
      nome: 'Charizard',
      id: '002',
      tipos: ['Fire', 'Fight'],
      img: 'assets/images/charizard.png'
    },
    {
      nome: 'Squirtle',
      id: '003',
      tipos: ['Poison', 'Poison'],
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
      nome: 'Squirtle',
      id: '009',
      tipos: ['Water', 'Poison'],
      img: 'assets/images/charizard.png'
    },
    {
      nome: 'Bulbasauro',
      id: '010',
      tipos: ['Eletric', 'Poison'],
      img: 'assets/images/buba.png'
    },
    {
      nome: 'Charizard',
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
      nome: 'Squirtle',
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
      nome: 'Squirtle',
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

  constructor() {
    this.pokemonsFiltrados = this.resultadoRequisicao;
  }

  filtrarPokemons() {
    console.log('this.valorDigitado', this.valorDigitado)
    if (this.valorDigitado) {
      this.pokemonsFiltrados = this.resultadoRequisicao.filter(pokemon =>
        pokemon.nome.toLowerCase().includes(this.valorDigitado.toLowerCase())
      );
    } else {
      this.pokemonsFiltrados = this.resultadoRequisicao;
    }
  }

  }