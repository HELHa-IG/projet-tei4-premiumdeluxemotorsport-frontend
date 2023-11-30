import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/homepage/home/home.component';
import { VehiculesPageComponent } from './components/vehicle/vehicules-page/vehicules-page.component';
import { SidebarComponent } from './components/panel/sidebar/sidebar.component';
import { ErrorPageNotFoundComponent } from './components/errors/error-page-not-found/error-page-not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'vehicle', component: VehiculesPageComponent},
	{ path: 'panel', component: SidebarComponent},
	// ajoutez vos pages bien au dessus de la page d'erreur 404
	{ path: '**', component: ErrorPageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
