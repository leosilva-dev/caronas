import { Component, OnInit } from '@angular/core';
import { ICarona } from '../Carona';
import { CaronasService } from '../caronas.service';

@Component({
  selector: 'caronas',
  templateUrl: 'caronas.page.html',
  styleUrls: ['caronas.page.scss']
})
export class CaronasPage implements OnInit {

  caronas: ICarona[] = []

  constructor(private caronasService: CaronasService) {
    this.getCaronas();
  }

  ngOnInit(): void {

  }

  getCaronas(): void{
    this.caronasService.getAll().subscribe(caronas => this.caronas = caronas);
  }

}
