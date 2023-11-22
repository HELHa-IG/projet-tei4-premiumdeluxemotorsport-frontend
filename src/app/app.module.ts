import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { TabMenuModule } from 'primeng/tabmenu';
import { HomeComponent } from './components/homepage/home/home.component';

import { ImageModule } from 'primeng/image';
import  { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
],
  imports: [
	BrowserModule,
  	AppRoutingModule,
	HttpClientModule,
	TabMenuModule,
	ImageModule,
	ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
