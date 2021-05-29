import { DadosService } from './../services/dados.service';
import { IFilme } from './../model/IFilme.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.page.html',
  styleUrls: ['./detalhes-filme.page.scss'],
})
export class DetalhesFilmePage implements OnInit {

  public filme: IFilme;

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.filme = this.dadosService.pegarDados('filme');
    console.log(this.filme);
  }

}
