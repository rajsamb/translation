import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export const APP_ID = 'kritech-translation';

@NgModule({
  imports: [
      BrowserModule.withServerTransition({ appId: APP_ID }),
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      AppRoutingModule,
  ],
  exports: [ AppRoutingModule ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
