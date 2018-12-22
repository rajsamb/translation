import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const APP_ID = 'my-app';

@NgModule({
  imports: [
      BrowserModule.withServerTransition({ appId: APP_ID }),
      HttpClientModule,
      AppRoutingModule,
  ],
  exports: [ AppRoutingModule ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
