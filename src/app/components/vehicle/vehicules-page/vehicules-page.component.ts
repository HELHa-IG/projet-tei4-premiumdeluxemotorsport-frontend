import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-vehicules-page',
  templateUrl: './vehicules-page.component.html',
  styleUrls: ['./vehicules-page.component.css']
})
export class VehiculesPageComponent implements OnInit {
vehicles!: Vehicle[];
vehicle!: Vehicle;
constructor(private vehicleService: VehiculeService){}

ngOnInit() {
	this.vehicleService.getVehicles().subscribe({
		next: (data) => {
			this.vehicles = data;
		},
		error: (error) => {
			this.vehicles = [];
			console.log(error);

		}
	})
}

}
