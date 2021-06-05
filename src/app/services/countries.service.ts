import { ICountrie } from '../models/ICountrie.model';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient, private toastController: ToastController) { }


  buscarPaises(): Observable<ICountrie[]>{
    const url = 'https://api.themoviedb.org/3/configuration/countries?api_key=034c5fdfe098d8cb374c2152cf44c2e7&language=pt-BR';
    return this.http.get<ICountrie[]>(url).pipe(
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
