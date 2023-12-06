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
import { SidebarComponent } from './components/panel/sidebar/sidebar.component';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { NavbarComponent } from './components/homepage/navbar/navbar.component';
import { LogocloudsComponent } from './components/homepage/logoclouds/logoclouds.component';
import { DividerModule} from 'primeng/divider'
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import {MessageModule} from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { StatsHomepageComponent } from './components/homepage/stats-homepage/stats-homepage.component';
import { TestimonialsComponent } from './components/homepage/testimonials/testimonials.component';
import { PanelContentComponent } from './components/panel/panel-content/panel-content.component';
import { ErrorPageNotFoundComponent } from './components/errors/error-page-not-found/error-page-not-found.component';
import { AddUserDialogComponent } from './components/panel/add-user-dialog/add-user-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VehiculesPageComponent,
    SidebarComponent,
    NavbarComponent,
    LogocloudsComponent,
    StatsHomepageComponent,
    TestimonialsComponent,
    PanelContentComponent,
    ErrorPageNotFoundComponent,
    AddUserDialogComponent
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
	CardModule,
	DividerModule,
	DynamicDialogModule,
	TagModule,
	DropdownModule,
	TableModule,
	MultiSelectModule,
	CheckboxModule,
	FileUploadModule,
	FormsModule,
	ReactiveFormsModule,
	MessagesModule,
	MessageModule,
	ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
