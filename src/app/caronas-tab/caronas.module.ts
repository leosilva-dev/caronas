import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CaronasPage } from './caronas.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CaronasPageRoutingModule } from './caronas-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CaronasPageRoutingModule
  ],
  declarations: [CaronasPage]
})
export class CaronasPageModule {}