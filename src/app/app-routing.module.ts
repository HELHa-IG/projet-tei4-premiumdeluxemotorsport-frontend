import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/homepage/home/home.component';
import { VehiculesPageComponent } from './components/vehicle/vehicules-page/vehicules-page.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'vehicle', component: VehiculesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
