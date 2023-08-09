import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./navbar.component";

@NgModule({
    declarations: [NavbarComponent],
    imports: [
      CommonModule,
      RouterModule,
      MatToolbarModule,
    ],
    exports: [
        NavbarComponent
    ]
  })
  export class NavbarModule { }