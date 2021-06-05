import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesSerieTvPageRoutingModule } from './detalhes-serie-tv-routing.module';

import { DetalhesSerieTvPage } from './detalhes-serie-tv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesSerieTvPageRoutingModule
  ],
  declarations: [DetalhesSerieTvPage]
})
export class DetalhesSerieTvPageModule {}
