import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor() { }

  @Input() title: string;

  @Input() contador: number;
  @Output() contadorChange = new EventEmitter();

  incrementar() {
    this.contador++;
    this.contadorChange.emit(this.contador);
  }

  decrmentar() {
    this.contador--;
    this.contadorChange.emit(this.contador);
  }

  // @Input() contador = 1;
  // @Output() contadorAtualizado = new EventEmitter();

  // incrementar() {
  //   this.contador++;
  //   this.contadorAtualizado.emit(this.contador);
  // }

  // decrmentar() {
  //   this.contador--;
  //   this.contadorAtualizado.emit(this.contador);
  // }

  ngOnInit(): void {
  }

}
