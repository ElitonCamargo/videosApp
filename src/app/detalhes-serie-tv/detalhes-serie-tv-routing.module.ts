import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesSerieTvPage } from './detalhes-serie-tv.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesSerieTvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesSerieTvPageRoutingModule {}
