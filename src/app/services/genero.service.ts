import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IGenero, IListaGenero } from '../models/IGenero.model';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private apiUrl = 'https://api.themoviedb.org/3';
  private key = 'api_key=034c5fdfe098d8cb374c2152cf44c2e7';
  private language = 'language=pt-BR';


  constructor(private http: HttpClient, private toastController: ToastController) { }

  buscarGeneros(): Observable<IListaGenero>{
    const url = `${this.apiUrl}/genre/movie/list?${this.language}&${this.key}`;
    return this.http.get<IListaGenero>(url).pipe(
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
