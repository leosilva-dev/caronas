import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CaronasService } from '../caronas.service';


@Component({
  selector: 'perfil',
  templateUrl: 'perfil.page.html',
  styleUrls: ['perfil.page.scss']
})
export class PerfilPage {
  nome: string = '';
  cidadeSaida: string = '';
  setor: string = '';
  telefone: string = '';
  numeroVagas: number = 1;
  ofereceCarona: boolean = false;

  constructor(private router: Router, private caronasService: CaronasService) {}

  salvar(){
    this.caronasService.createCarona({
      id: 0,
      name: this.nome,
      cidade:this.cidadeSaida,
      ofereceCarona: this.ofereceCarona,
      phone: this.telefone,
      setor: this.setor,
      vagasRestantes: this.numeroVagas
    })
  }

  handleToggleCarona(){
    this.ofereceCarona = !this.ofereceCarona
  }

  sair(){
    this.router.navigate(['/']);
  }

}
