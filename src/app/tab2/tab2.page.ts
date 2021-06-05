import { TvService } from './../services/tv.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { DadosService } from '../services/dados.service';
import { FilmeService } from '../services/filme.service';
import { GeneroService } from '../services/genero.service';
import { IFilme } from '../models/IFilme.model';
import { IListaTv, ITv } from '../models/IListaTv.model';
import { CountriesService } from '../services/countries.service';
import { ICountrie } from '../models/ICountrie.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  public listaDeSeriesTv: IListaTv;
  public generos: string[] = [];
  public paises: string[] = [];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router,
    public tvService: TvService,
    public countriesService: CountriesService,
    public generoService: GeneroService
  ) {}

  exibirDetalhesSerieTv(serie: ITv) {
    this.dadosService.guardarDados('serie', serie);
    this.dadosService.guardarDados('generos', this.generos);
    this.dadosService.guardarDados('paises', this.paises);
    this.route.navigateByUrl('detalhes-serie-tv');
  }

  async exibirAlertaFavorito(serie: string) {
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
            this.filmeFavoritado(serie);
          }
        }
      ]
    });

    await alert.present();
  }

  async filmeFavoritado(serie: string) {
    const toast = await this.toastController.create({
      header: serie,
      position: 'middle',
      color: 'success',
      message: 'favoritado com sucesso!',
      duration: 2000
    });
    toast.present();
  }

  buscarSeriesTv(evento: any){
    const textBusca = evento.target.value;
    if(textBusca.trim() !== ''){
      this.listarSeriesTv(textBusca);
    }
  }

  listarSeriesTv(textBusca: string){
    this.tvService.buscarSeriesTv(textBusca).subscribe(dados =>{this.listaDeSeriesTv = dados;});
  }

  ngOnInit(){
    this.generoService.buscarGeneros('tv').subscribe(result =>{
      result.genres.forEach(genero => {this.generos[genero.id] = genero.name;});
    });
    this.countriesService.buscarPaises().subscribe(result => {
      //this.paises = result;
      result.forEach(pais =>{
        this.paises[pais.iso_3166_1] = pais.native_name;
      });
    });
    this.listarSeriesTv(this.listarFilmeAleatorio());
  }

  listarFilmeAleatorio() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    return characters.charAt(Math.floor(Math.random() * charactersLength));
 }
}
