import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folheto-mercado',
  templateUrl: './folheto-mercado.component.html',
  styleUrls: ['./folheto-mercado.component.scss'],
  providers: [
    DecimalPipe,
  ]
})
export class FolhetoMercadoComponent implements OnInit  {

  constructor(
    private decimalPipe: DecimalPipe
  ) { }

  ngOnInit(): void {
  }

  compras = [{
    produto: 'lâmpada',
    valor: 299.29,
    quantidade: 2,
    peso: 0,
    data: new Date(2020, 1, 1, 15, 20),
  }, {
    produto: 'farinha',
    valor: 450.29,
    quantidade: 2,
    peso: 29.33333,
    data: new Date(2020, 1, 1, 15, 20),
  }];

  getPesoFormatado(peso: number){
    if (peso <= 0) {
      return 'sem peso';
    }

    return this.decimalPipe.transform(peso, '1.1-2') + ' Kg';
  }
}
