import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/homepage/home/home.component';
import { VehiculesPageComponent } from './components/vehicle/vehicules-page/vehicules-page.component';
import { SidebarComponent } from './components/panel/sidebar/sidebar.component';
import { ErrorPageNotFoundComponent } from './components/errors/error-page-not-found/error-page-not-found.component';
import { RegisterComponent } from "./components/authentication/register/register.component";
import { LoginComponent } from "./components/authentication/login/login.component";
import { ContactComponent } from "./components/contact/contact.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AccountsDashboardComponent } from "./components/dashboard/accounts-dashboard/accounts-dashboard.component";
import { RolesDashboardComponent } from "./components/dashboard/roles-dashboard/roles-dashboard.component";
import { UsersDashboardComponent } from "./components/dashboard/users-dashboard/users-dashboard.component";
import { ReservationsDashboardComponent } from "./components/dashboard/reservations-dashboard/reservations-dashboard.component";
import { AddRoleDashboardComponent } from "./components/dashboard/roles-dashboard/add-role-dashboard/add-role-dashboard.component";
import { UpdateRoleDashboardComponent } from "./components/dashboard/roles-dashboard/update-role-dashboard/update-role-dashboard.component";
import { AddUserDashboardComponent } from './components/dashboard/users-dashboard/add-user-dashboard/add-user-dashboard.component';
import { UpdateUserDashboardComponent } from './components/dashboard/users-dashboard/update-user-dashboard/update-user-dashboard.component';
import { AddReservationDashboardComponent } from './components/dashboard/reservations-dashboard/add-reservation-dashboard/add-reservation-dashboard.component';
import { UpdateReservationDashboardComponent } from './components/dashboard/reservations-dashboard/update-reservation-dashboard/update-reservation-dashboard.component';
import {VehiclesDashboardComponent} from "./components/dashboard/vehicles-dashboard/vehicles-dashboard.component";
import {
	AddVehicleDashboardComponent
} from "./components/dashboard/vehicles-dashboard/add-vehicle-dashboard/add-vehicle-dashboard.component";
import {
	UpdateVehicleDashboardComponent
} from "./components/dashboard/vehicles-dashboard/update-vehicle-dashboard/update-vehicle-dashboard.component";
import {CommandsDashboardComponent} from "./components/dashboard/commands-dashboard/commands-dashboard.component";
import {
	AddCommandDashboardComponent
} from "./components/dashboard/commands-dashboard/add-command-dashboard/add-command-dashboard.component";
import {
	UpdateCommandDashboardComponent
} from "./components/dashboard/commands-dashboard/update-command-dashboard/update-command-dashboard.component";
import {CustomsDashboardComponent} from "./components/dashboard/customs-dashboard/customs-dashboard.component";
import {
	UpdateCustomDashboardComponent
} from "./components/dashboard/customs-dashboard/update-custom-dashboard/update-custom-dashboard.component";
import {
	AddCustomDashboardComponent
} from "./components/dashboard/customs-dashboard/add-custom-dashboard/add-custom-dashboard.component";

const routes: Routes = [
	//{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '', component: HomeComponent },
	{ path: 'login', component: LoginComponent},
	{ path: 'register', component: RegisterComponent},
	{ path: 'vehicles', component: VehiculesPageComponent},
	{ path: 'reservations', component: VehiculesPageComponent},
	{ path: 'commands', component: VehiculesPageComponent},
	{ path: 'customs', component: VehiculesPageComponent},
	{ path: 'contact', component: ContactComponent},
	{ path: 'dashboard', component: DashboardComponent, children: [
			{ path: 'account', component: AccountsDashboardComponent},
			{ path: 'roles', component: RolesDashboardComponent},
			{ path: 'roles/add', component: AddRoleDashboardComponent},
			{ path: 'roles/update/:id', component: UpdateRoleDashboardComponent},
			{ path: 'users', component: UsersDashboardComponent},
			{ path: 'users/add', component: AddUserDashboardComponent},
			{ path: 'users/update/:id', component: UpdateUserDashboardComponent},
			{ path: 'vehicles', component: VehiclesDashboardComponent},
			{ path: 'vehicles/add', component: AddVehicleDashboardComponent},
			{ path: 'vehicles/update/:id', component: UpdateVehicleDashboardComponent},
			{ path: 'reservations', component: ReservationsDashboardComponent},
			{ path: 'reservations/add', component: AddReservationDashboardComponent},
			{ path: 'reservations/update/:id', component: UpdateReservationDashboardComponent},
			{ path: 'commands', component: CommandsDashboardComponent},
			{ path: 'commands/add', component: AddCommandDashboardComponent},
			{ path: 'commands/update/:id', component: UpdateCommandDashboardComponent},
			{ path: 'customs', component: CustomsDashboardComponent},
			{ path: 'customs/add', component: AddCustomDashboardComponent},
			{ path: 'customs/update/:id', component: UpdateCustomDashboardComponent},
	]},
	{ path: 'panel', component: SidebarComponent},

	// ajoutez vos pages bien au dessus de la page d'erreur 404
	{ path: '**', component: ErrorPageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
