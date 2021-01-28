import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = "Breath and count";

  onContadorAtualizado(contadorFinal) {
    console.log('Contador atualizado:' + contadorFinal);
  }

  constructor() { }

}
