import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IListaTv } from '../models/IListaTv.model';
import { map, catchError } from 'rxjs/operators';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  private apiUrl = 'https://api.themoviedb.org/3/search/tv?';
  private key = 'api_key=034c5fdfe098d8cb374c2152cf44c2e7';
  private language = 'language=pt-BR';
  //https://api.themoviedb.org/3/search/tv?api_key=034c5fdfe098d8cb374c2152cf44c2e7&language=pt-BR&first_air_date_year=2000&query=a
  constructor(private http: HttpClient, private toastController: ToastController) { }


  buscarSeriesTv(buscar: string): Observable<IListaTv>{
    const url = `${this.apiUrl}${this.key}&${this.language}&query=${buscar}`;
    console.log('URL:'+ url);
    return this.http.get<IListaTv>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  async exibirErro(erro: any) {
    const toast = await this.toastController.create({
      header: 'Erro ao consultar a API!!!',
      position: 'middle',
      color: 'danger',
      message: 'Motivo: ' + erro.error.errors[0],
      duration: 2000
    });
    toast.present();
    return null;
  }
}
