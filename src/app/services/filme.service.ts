import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IListaFilmes } from '../models/IListaFilmes.model';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private apiUrl = 'https://api.themoviedb.org/3';
  private key = 'api_key=034c5fdfe098d8cb374c2152cf44c2e7';
  private language = 'language=pt-BR';
  private region = 'region=BR';

//https://api.themoviedb.org/3/search/movie/?language=pt-BR&region=BR&api_key=034c5fdfe098d8cb374c2152cf44c2e7&query=

  constructor(private http: HttpClient, private toastController: ToastController) { }

  buscarFilmes(buscar: string): Observable<IListaFilmes>{
    const url = `${this.apiUrl}/search/movie/?${this.language}&${this.region}&${this.key}&query=${buscar}`;
    console.log(url);
    return this.http.get<IListaFilmes>(url).pipe(
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
