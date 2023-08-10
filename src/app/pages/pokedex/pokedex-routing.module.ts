import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './pokedex.component';
import { ListaPokemonComponent } from './components/list-pokemons/lista-pokemon.component';

const routes: Routes = [
  { 
    path: '', 
    component: PokedexComponent,
    children: [
      {
        path:'',
        component: ListaPokemonComponent
      },
      {
        path: 'details',
        loadChildren: () =>
      import('./components/details-pokemons/detalhes-pokemon.module').then((m) => m.DetalhesPokemonModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }