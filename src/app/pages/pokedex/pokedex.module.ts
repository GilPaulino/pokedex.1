import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pokedex.component';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { NgOptimizedImage } from '@angular/common'
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { ListaPokemonComponent } from './components/list-pokemons/lista-pokemon.component';
import { DetalhesPokemonModule } from './components/details-pokemons/detalhes-pokemon.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PokedexComponent, ListaPokemonComponent],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    RouterModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    NgOptimizedImage,
    NavbarModule,
    DetalhesPokemonModule,
    FormsModule
  ],
  exports: [
    PokedexComponent
  ]
})
export class PokedexModule { }
