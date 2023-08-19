import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { MiniGameComponent } from './mini-game.component';

@NgModule({
  declarations: [MiniGameComponent],
  imports: [
    CommonModule,    
    RouterModule,
    NavbarModule,
  ],
  exports: [
    MiniGameComponent
  ]
})
export class MiniGameModule { }