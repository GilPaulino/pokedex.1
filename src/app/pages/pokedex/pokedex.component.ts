import { Component } from '@angular/core';
import { COLORS_TYPE } from 'src/app/shared/enum/colors.enum';

interface IOrdenacao {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent {

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
      tipos: ['Water', 'Poison'],
      img: 'assets/images/buba.png'
    },
    {
      nome: 'Squirtle',
      id: '003',
      tipos: ['Water', 'Poison'],
      img: 'assets/images/buba.png'
    },
    {
      nome: 'Squirtle',
      id: '003',
      tipos: ['Water', 'Poison'],
      img: 'assets/images/buba.png'
    }
  ]



}
