import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { ApiConfig } from '../apiconfig';
import { apiconfigvalue } from '../apiconfig.value';
import { LogService } from '../log.service';

export const configValue: ApiConfig = {
  EndPoint:'orders.com',
  Token:'9797987'
};


@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  providers:[
  {provide:apiconfigvalue,useValue:configValue}
  ]

})
export class OrdersModule { }
