import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: string;
  public senha: string;

  constructor(public toastController: ToastController, private router: Router) { }

  async alertaLogin(msg: string, cor: string = 'success') {
    const toast = await this.toastController.create({
      header: 'Informação',
      position: 'middle',
      color: cor,
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

  login(){
    if(this.email === 'admin@admin.com'){
      if(this.senha === 'admin'){
        this.router.navigateByUrl('tabs/tab1');
        this.alertaLogin('Login efetuado com sucesso!!!');
      }
      else{
        this.alertaLogin('Senha incorreta!!!','danger');
      }
    }else{
      this.alertaLogin('E-mail incorreto!!!','danger');
    }
  }
}
