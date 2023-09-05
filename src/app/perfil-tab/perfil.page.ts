import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'perfil',
  templateUrl: 'perfil.page.html',
  styleUrls: ['perfil.page.scss']
})
export class PerfilPage {

  constructor(private router: Router) {}

  sair(){
    this.router.navigate(['/']);
  }

}
