import { Component, OnInit } from '@angular/core';
import { MEMES_AGRUPADOS_POR_CATEGORIA } from './memes-linguagens.constants';

@Component({
  selector: 'app-memes-linguagens',
  templateUrl: './memes-linguagens.component.html',
  styleUrls: ['./memes-linguagens.component.scss']
})
export class MemesLinguagensComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;
  PREFIXO_IMG_URL = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images/';

}
