import { Component, Input } from '@angular/core';
import { ICarona } from '../Carona';
import { CaronasService } from '../caronas.service';
import { ModalController } from '@ionic/angular';
import { MapaModalPage } from '../mapa-modal/mapa-modal.page';


@Component({
  selector: 'app-card-carona',
  templateUrl: './card-carona.component.html',
  styleUrls: ['./card-carona.component.scss'],
})
export class CardCaronaComponent{

  constructor(private caronasService: CaronasService, private modalController: ModalController) {}

  @Input() carona?: ICarona;

  abrirWhatsApp(numeroTelefone: string): void {
    const url = `https://api.whatsapp.com/send?phone=${numeroTelefone}`;
    window.open(url, '_blank');
  }

  showInterest(caronaId:number): void {
    this.caronasService.tenhoInteresse(caronaId)
    if(this.carona?.vagasRestantes && this.carona?.vagasRestantes > 0 ){
      this.carona.vagasRestantes = this.carona?.vagasRestantes - 1
    }
  }

  async abrirMapa(endereco: string) {
    const modal = await this.modalController.create({
      component: MapaModalPage,
      componentProps: {
        endereco
      }
    });
    return await modal.present();
  }
}
