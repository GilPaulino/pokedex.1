import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pokedex.component';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card'

@NgModule({
  declarations: [PokedexComponent],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    RouterModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [
    PokedexComponent
  ]
})
export class PokedexModule { }
