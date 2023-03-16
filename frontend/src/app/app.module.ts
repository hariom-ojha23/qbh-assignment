import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './modules/home/home/home.module';
import { ViewPdfModule } from './modules/view-pdf/view-pdf.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //pages
    HomeModule,
    ViewPdfModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
