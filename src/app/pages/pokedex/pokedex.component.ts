import { Component } from '@angular/core';

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

  tiposOrdenacao: IOrdenacao[] = [
    {value: 1, viewValue: 'Nome'},
    {value: 2, viewValue: 'ID'},
    {value: 3, viewValue: 'Tipo'}
  ];
}
