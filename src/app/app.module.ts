import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { TabMenuModule } from 'primeng/tabmenu';
import { HomeComponent } from './components/homepage/home/home.component';

import { ImageModule } from 'primeng/image';
import  { ButtonModule } from 'primeng/button';
import { VehiculesPageComponent } from './components/vehicle/vehicules-page/vehicules-page.component';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VehiculesPageComponent
],
  imports: [
	BrowserModule,
  	AppRoutingModule,
	HttpClientModule,
	TabMenuModule,
	ImageModule,
	ButtonModule,
	SidebarModule,
	BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
