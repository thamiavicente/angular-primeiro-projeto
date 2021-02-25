import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = "Breath and count";
  valorContador = 0;

  // onContadorAtualizado(contadorFinal) {
  //   console.log('Contador atualizado:', contadorFinal);
  // }

  constructor() { }

}
