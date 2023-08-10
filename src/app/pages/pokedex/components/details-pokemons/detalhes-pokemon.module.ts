import { CommonModule } from "@angular/common";
import { DetalhesPokemonComponent } from "./detalhes-pokemon.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { DetalhesPokemonRoutingModule } from "./detalhes-pokemon-routing.module";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [DetalhesPokemonComponent],
  imports: [
    CommonModule,
    DetalhesPokemonRoutingModule,
    RouterModule,
    MatIconModule
    
  ],
  exports: [
    DetalhesPokemonComponent
  ]
})
export class DetalhesPokemonModule { }
