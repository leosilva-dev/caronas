import { Component, Input } from '@angular/core';
import { ICarona } from '../Carona';

@Component({
  selector: 'app-card-carona',
  templateUrl: './card-carona.component.html',
  styleUrls: ['./card-carona.component.scss'],
})
export class CardCaronaComponent{

  @Input() carona?: ICarona;

  abrirWhatsApp(numeroTelefone: string): void {
    const url = `https://api.whatsapp.com/send?phone=${numeroTelefone}`;
    window.open(url, '_blank');
  }

}
