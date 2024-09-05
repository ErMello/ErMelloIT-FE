import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComputerPageRoutingModule } from './computer-routing.module';

import { ComputerPage } from './computer.page';
import {HeaderPageModule} from "../../../shared/header/header.module";
import {FooterPageModule} from "../../../shared/footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComputerPageRoutingModule,
    HeaderPageModule,
    FooterPageModule
  ],
  declarations: [ComputerPage]
})
export class ComputerPageModule {}
