import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-navegacao',
  templateUrl: './dialog-navegacao.component.html',
  styleUrls: ['./dialog-navegacao.component.scss']
})
export class DialogNavegacaoComponent {  
  constructor(public dialogRef: MatDialogRef<DialogNavegacaoComponent>){}

  fecharDialog(): void {
    this.dialogRef.close();
  }
}
