import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'map',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss']
})
export class MapPage implements OnInit {
  map: L.Map;

  constructor() {
    this.map = {} as L.Map
  }

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    this.map = L.map('map').setView([51.505, -0.09], 13); // Configurar a localização e o zoom inicial

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom:19,
    }).addTo(this.map);



    // Adicionar um marcador de exemplo
    // L.marker([51.5, -0.09])
    //   .addTo(this.map)
    //   .bindPopup('Exemplo de Marcador')
    //   .openPopup();
  }

  addMarker() {
    // Função para adicionar marcadores personalizados
    // Você pode implementar isso com base em interações do usuário
    // Exemplo: this.map.on('click', (e) => { ... });
  }

}
