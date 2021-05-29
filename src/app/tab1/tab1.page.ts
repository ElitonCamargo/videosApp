import { IFilme } from './../model/IFilme.model';
import { DadosService } from './../services/dados.service';

import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})



export class Tab1Page {

  public listaDeFilmes: IFilme[] = [
    {
      nome: 'Tom & Jerry - O Filme (2021)',
      lancamento: '11/02/2021 (BR)',
      duracao: '1h 41m',
      classificacao: 73,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9NvYyM8H6d5KAVGqpyFV9YPO5cU.jpg',
      generos: ['Comédia', 'Família', 'Animação'],
    },
    {
      nome: 'Sem Remorso (2021)',
      lancamento: '30/04/2021 (BR)',
      duracao: '1h 50m',
      classificacao: 80,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uHEZ4ZMziIjlAgCTQAEh9ROvtj0.jpg',
      generos: ['Ação', 'Aventura', 'Thriller', 'Guerra'],
      pagina: '/sem-remorso'
    },
    {
      nome: 'O Conto da Aia (2017)',
      lancamento: '30/04/2017 (BR)',
      duracao: '1h 50m',
      classificacao: 78,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2rK53k6Lg6IDqHM7xp8OTzzzpz7.jpg',
      generos: ['Sci-Fi & Fantasy', 'Drama'],
    },
    {
      nome: 'Três Homens em Conflito (1966)',
      lancamento: '11/01/1968 (BR)',
      duracao: '2h 58m',
      classificacao: 82,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f6CoXpyZRqYJF3lTfxjWIahO6qM.jpg',
      generos: ['Faroeste'],
    },
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021 (BR)',
      duracao: '1h 50m',
      classificacao: 78,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat'
    }

  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router
  ) { }

  exibirFilme(filme: IFilme) {
    this.dadosService.guardarDados('filme', filme);
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
}
