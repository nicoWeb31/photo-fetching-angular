import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DispalyPhotoComponent } from './dispaly-photo/dispaly-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    DispalyPhotoComponent
  ],
  imports: [
  BrowserModule,
  HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
