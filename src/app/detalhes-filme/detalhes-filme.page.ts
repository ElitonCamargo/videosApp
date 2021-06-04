import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.page.html',
  styleUrls: ['./detalhes-filme.page.scss'],
})
export class DetalhesFilmePage implements OnInit {

  public filme: IFilme;
  public generos: string[];

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.filme = this.dadosService.pegarDados('filme');
    this.generos = this.dadosService.pegarDados('generos');
  }

}
