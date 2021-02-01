import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  constructor() { }

  getTransacoes() {
    return [{
      id: 1,
      data: '2020-02-04T13:00:24,7442',
      descricao: 'Salário',
      valor: 3500,
      categoria: 'Salário'
    }, {
      id: 2,
      data: '2020-04-04T15:00:24,7442',
      descricao: 'Camiseta Preta',
      valor: -65,
      categoria: 'Vestuário'
    }]
  }
}
