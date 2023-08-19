import { CommonModule } from "@angular/common";
import { DetalhesPokemonComponent } from "./detalhes-pokemon.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { DetalhesPokemonRoutingModule } from "./detalhes-pokemon-routing.module";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [DetalhesPokemonComponent],
  imports: [
    CommonModule,
    DetalhesPokemonRoutingModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    DetalhesPokemonComponent
  ]
})
export class DetalhesPokemonModule { }
