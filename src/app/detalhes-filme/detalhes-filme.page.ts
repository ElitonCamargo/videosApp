import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.model';
import { Component, OnInit } from '@angular/core';
import { ILanguages } from '../models/ILanguages.model';

@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.page.html',
  styleUrls: ['./detalhes-filme.page.scss'],
})
export class DetalhesFilmePage implements OnInit {

  public filme: IFilme;
  public generos: string[];
  public idiomas: ILanguages[];

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.filme = this.dadosService.pegarDados('filme');
    this.generos = this.dadosService.pegarDados('generos');
    this.idiomas = this.dadosService.pegarDados('idioma');
  }

  verIdioma(lang: string): string{
    let p;
    this.idiomas.forEach(idioma => {
      if(idioma.iso_639_1 === lang.trim()){
        p = idioma.name;
      }
    });
    return p;
  }
}
