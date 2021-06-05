import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';
import { ITv } from '../models/IListaTv.model';

@Component({
  selector: 'app-detalhes-serie-tv',
  templateUrl: './detalhes-serie-tv.page.html',
  styleUrls: ['./detalhes-serie-tv.page.scss'],
})
export class DetalhesSerieTvPage implements OnInit {

  public serieTv: ITv;
  public generos: string[];
  public paises: string[];

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.serieTv = this.dadosService.pegarDados('serie');
    this.generos = this.dadosService.pegarDados('generos');
    this.paises = this.dadosService.pegarDados('paises');
  }

}
