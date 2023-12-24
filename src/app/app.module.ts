import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { TabMenuModule } from 'primeng/tabmenu';
import { HomeComponent } from './components/homepage/home/home.component';

import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
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
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { StatsHomepageComponent } from './components/homepage/stats-homepage/stats-homepage.component';
import { TestimonialsComponent } from './components/homepage/testimonials/testimonials.component';
import { PanelContentComponent } from './components/panel/panel-content/panel-content.component';
import { ErrorPageNotFoundComponent } from './components/errors/error-page-not-found/error-page-not-found.component';
import { AddUserDialogComponent } from './components/panel/add-user-dialog/add-user-dialog.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import {NgOptimizedImage} from "@angular/common";
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarMenuComponent } from './components/dashboard/sidebar-menu/sidebar-menu.component';
import { AccountsDashboardComponent } from './components/dashboard/accounts-dashboard/accounts-dashboard.component';
import { UsersDashboardComponent } from './components/dashboard/users-dashboard/users-dashboard.component';
import { RolesDashboardComponent } from './components/dashboard/roles-dashboard/roles-dashboard.component';
import { ReservationsDashboardComponent } from './components/dashboard/reservations-dashboard/reservations-dashboard.component';
import { AddRoleDashboardComponent } from './components/dashboard/roles-dashboard/add-role-dashboard/add-role-dashboard.component';
import { UpdateRoleDashboardComponent } from './components/dashboard/roles-dashboard/update-role-dashboard/update-role-dashboard.component';
import { UpdateUserDashboardComponent } from './components/dashboard/users-dashboard/update-user-dashboard/update-user-dashboard.component';
import { AddUserDashboardComponent } from './components/dashboard/users-dashboard/add-user-dashboard/add-user-dashboard.component';
import { AddReservationDashboardComponent } from './components/dashboard/reservations-dashboard/add-reservation-dashboard/add-reservation-dashboard.component';
import { UpdateReservationDashboardComponent } from './components/dashboard/reservations-dashboard/update-reservation-dashboard/update-reservation-dashboard.component';
import { VehiclesDashboardComponent } from './components/dashboard/vehicles-dashboard/vehicles-dashboard.component';
import { AddVehicleDashboardComponent } from './components/dashboard/vehicles-dashboard/add-vehicle-dashboard/add-vehicle-dashboard.component';
import { UpdateVehicleDashboardComponent } from './components/dashboard/vehicles-dashboard/update-vehicle-dashboard/update-vehicle-dashboard.component';
import { CommandsDashboardComponent } from './components/dashboard/commands-dashboard/commands-dashboard.component';
import { AddCommandDashboardComponent } from './components/dashboard/commands-dashboard/add-command-dashboard/add-command-dashboard.component';
import { UpdateCommandDashboardComponent } from './components/dashboard/commands-dashboard/update-command-dashboard/update-command-dashboard.component';
import { CustomsDashboardComponent } from './components/dashboard/customs-dashboard/customs-dashboard.component';
import { UpdateCustomDashboardComponent } from './components/dashboard/customs-dashboard/update-custom-dashboard/update-custom-dashboard.component';
import { AddCustomDashboardComponent } from './components/dashboard/customs-dashboard/add-custom-dashboard/add-custom-dashboard.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ProductPageComponent } from './components/commands/product-page/product-page.component';
import { ThanksPageComponent } from './components/commands/thanks-page/thanks-page.component';
import { OrderHistoryComponent } from './components/commands/order-history/order-history.component';

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
    AddUserDialogComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
    DashboardComponent,
    SidebarMenuComponent,
    AccountsDashboardComponent,
    UsersDashboardComponent,
    RolesDashboardComponent,
    ReservationsDashboardComponent,
    AddRoleDashboardComponent,
    UpdateRoleDashboardComponent,
    UpdateUserDashboardComponent,
    AddUserDashboardComponent,
    AddReservationDashboardComponent,
    UpdateReservationDashboardComponent,
    VehiclesDashboardComponent,
    AddVehicleDashboardComponent,
    UpdateVehicleDashboardComponent,
    CommandsDashboardComponent,
    AddCommandDashboardComponent,
    UpdateCommandDashboardComponent,
    CustomsDashboardComponent,
    UpdateCustomDashboardComponent,
    AddCustomDashboardComponent,
    ReservationsComponent,
    ProductPageComponent,
    ThanksPageComponent,
    OrderHistoryComponent,
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
		ToastModule,
		NgOptimizedImage
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
