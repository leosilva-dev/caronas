import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-mapa-modal',
  templateUrl: './mapa-modal.page.html',
  styleUrls: ['./mapa-modal.page.scss'],
})

export class MapaModalPage implements OnInit {

  lat: string = '';
  long: string = '';
  map: Leaflet.Map;

  constructor(private navParams: NavParams, private modalController: ModalController) {
    this.map = {} as Leaflet.Map
   }

  ngOnInit(){
    this.lat = this.navParams.get('lat');
    this.long = this.navParams.get('long');
  }

  ngAfterViewInit(){
    this.initializeMap(this.lat, this.long);
  }

  onShowEvent(){
    this.map.invalidateSize();
  }

  initializeMap(lat: string, long: string) {
    this.map = Leaflet.map('map').setView([51.505, -0.09], 13); // Configurar a localização e o zoom inicial

    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom:19,
    }).addTo(this.map);

    // Adicionar um marcador de exemplo
    Leaflet.marker([parseFloat(lat), parseFloat(long)])
    .addTo(this.map)
    .bindPopup('Carona')
    .openPopup();

    window.dispatchEvent(new Event('resize')); 


  }

  fecharModal() {
    this.modalController.dismiss();
  }

}
