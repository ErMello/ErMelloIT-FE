import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComputerPage } from './computer.page';

const routes: Routes = [
  {
    path: '',
    component: ComputerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComputerPageRoutingModule {}
