import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesPokemonComponent } from './detalhes-pokemon.component';

const routes: Routes = [
  { 
    path: ':nome', 
    component: DetalhesPokemonComponent,    
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalhesPokemonRoutingModule { }