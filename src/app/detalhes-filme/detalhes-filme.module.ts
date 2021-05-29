import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesFilmePageRoutingModule } from './detalhes-filme-routing.module';

import { DetalhesFilmePage } from './detalhes-filme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesFilmePageRoutingModule
  ],
  declarations: [DetalhesFilmePage]
})
export class DetalhesFilmePageModule {}
