import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPageRoutingModule } from './web-routing.module';

import { WebPage } from './web.page';
import {HeaderPageModule} from "../../../shared/header/header.module";
import {FooterPageModule} from "../../../shared/footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPageRoutingModule,
    HeaderPageModule,
    FooterPageModule
  ],
  declarations: [WebPage]
})
export class WebPageModule {}
