import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiniGameComponent } from './mini-game.component';

const routes: Routes = [
  { 
    path: '', 
    component: MiniGameComponent    
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiniGameModule { }