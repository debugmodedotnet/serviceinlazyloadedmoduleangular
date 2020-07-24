import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { LogService } from './log.service';
import { ApiConfig } from './apiconfig';
import { apiconfigvalue } from './apiconfig.value';

export const configValue: ApiConfig = {
  EndPoint:'app.com',
  Token:'abdfef5'
};

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide:apiconfigvalue,useValue:configValue}],
  bootstrap: [AppComponent]
})
export class AppModule { }
