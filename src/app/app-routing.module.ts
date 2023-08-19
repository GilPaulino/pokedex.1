import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pokedex',
    loadChildren: () =>
      import('./pages/pokedex/pokedex.module').then((m) => m.PokedexModule),
  },
  {
    path: 'mini-game',
    loadChildren: () =>
      import('./pages/mini-game/mini-game.module').then((m) => m.MiniGameModule),
  },
  {
    path: '**',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
