import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  senha: string = '';

  constructor(private router: Router, private toastController: ToastController) {}

  isToastOpen = false;

  async wrongPass() {
    const toast = await this.toastController.create({
      message: 'Usuário ou senha incorretos...',
      duration: 1500,
      position: 'bottom',
      color: 'danger',
    });

    await toast.present();
  }

  login() {
    if (this.email === 'usuario@example.com' && this.senha === 'senha123') {
      this.router.navigate(['/tabs']);
    } else {
      this.wrongPass()
   }
  }
}
