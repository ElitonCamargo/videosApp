import { LanguagesService } from './../services/languages.service';
import { ICountrie } from '../models/ICountrie.model';
import { CountriesService } from './../services/countries.service';
import { GeneroService } from './../services/genero.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { DadosService } from './../services/dados.service';
import { FilmeService } from './../services/filme.service';
import { IListaFilmes } from '../models/IListaFilmes.model';
import { IFilme } from '../models/IFilme.model';
import { ILanguages } from '../models/ILanguages.model';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})



export class Tab1Page implements OnInit {



  public listaDeFilmes: IListaFilmes;
  public generos: string[] = [];

  public idioma: ILanguages[] = [];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router,
    public filmeService: FilmeService,
    public generoService: GeneroService,
    public languagesService: LanguagesService
  ) {}

  exibirFilme(filme: IFilme) {
    this.dadosService.guardarDados('filme', filme);
    this.dadosService.guardarDados('generos', this.generos);
    this.dadosService.guardarDados('idioma', this.idioma);
    this.route.navigateByUrl('detalhes-filme');
  }

  async exibirAlertaFavorito(filme: string) {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, favoritar!',
          handler: () => {
            this.filmeFavoritado(filme);
          }
        }
      ]
    });

    await alert.present();
  }

  async filmeFavoritado(filme: string) {
    const toast = await this.toastController.create({
      header: filme,
      position: 'middle',
      color: 'success',
      message: 'favoritado com sucesso!',
      duration: 2000
    });
    toast.present();
  }

  buscarFilmes(evento: any){
    const textBusca = evento.target.value;
    if(textBusca.trim() !== ''){
      this.listarFilmes(textBusca);
    }
  }

  listarFilmes(textBusca: string){
    this.filmeService.buscarFilmes(textBusca).subscribe(dados =>{this.listaDeFilmes = dados;});
  }

  ngOnInit(){
    this.generoService.buscarGeneros().subscribe(result =>{
      result.genres.forEach(genero => {this.generos[genero.id] = genero.name;});
    });
    this.languagesService.buscarIdioma().subscribe(result => {this.idioma = result;});
    this.listarFilmes(this.listarFilmeAleatorio());
  }

  listarFilmeAleatorio() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    return characters.charAt(Math.floor(Math.random() * charactersLength));
 }

}
