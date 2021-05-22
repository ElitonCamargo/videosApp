import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})



export class Tab1Page {

  public listaFilmes = [
    {
      "nome":'Tom & Jerry - O Filme (2021)',
      "img":'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9NvYyM8H6d5KAVGqpyFV9YPO5cU.jpg',
      "genero":'Comédia, Família, Animação',
      "data":'11/02/2021 (BR) - 1h 41m',
      "gostou":"73%"
    },
    {
      "nome":'Sem Remorso (2021)',
      "img":'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uHEZ4ZMziIjlAgCTQAEh9ROvtj0.jpg',
      "genero":'Ação, Aventura, Thriller, Guerra',
      "data":'30/04/2021 (BR) - 1h 50m',
      "gostou":"78%"
    },
    {
      "nome":'O Conto da Aia (2017)',
      "img":'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2rK53k6Lg6IDqHM7xp8OTzzzpz7.jpg',
      "genero":'Sci-Fi & Fantasy, Drama',
      "data":'30/04/2017 (BR) - 1h 50m',
      "gostou":"82%"
    },
    {
      "nome":'Três Homens em Conflito (1966)',
      "img":'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f6CoXpyZRqYJF3lTfxjWIahO6qM.jpg',
      "genero":'Faroeste',
      "data":'11/01/1968 (BR) - 2h 58m',
      "gostou":'85%'
    },
    {
      "nome":'Mortal Kombat (2021)',
      "img":'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      "genero":'Ação, Fantasia, Aventura',
      "data":'15/04/2021 (BR) - 1h 50m',
      "gostou":'76%'
    },
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController
  ) {}

  async exibirAlertaFavorito(filme:string) {
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

  async filmeFavoritado(filme:string) {
    const toast = await this.toastController.create({
      header:filme,
      position:"middle",
      color:"success",
      message: `favoritado com sucesso!`,
      duration: 2000
    });
    toast.present();
  }
}
