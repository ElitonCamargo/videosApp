import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesFilmePage } from './detalhes-filme.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesFilmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesFilmePageRoutingModule {}
