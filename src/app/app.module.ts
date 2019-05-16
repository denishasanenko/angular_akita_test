import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BeerModule} from './beer/beer.module';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BeerModule,
    AkitaNgDevtools.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
