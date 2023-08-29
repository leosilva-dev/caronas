import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CaronasPage } from './caronas.page';

import { CaronasPageRoutingModule } from './caronas-routing.module';
import { CardCaronaComponent } from '../card-carona/card-carona.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CaronasPageRoutingModule,
  ],
  declarations: [CaronasPage, CardCaronaComponent]
})
export class CaronasPageModule {}
