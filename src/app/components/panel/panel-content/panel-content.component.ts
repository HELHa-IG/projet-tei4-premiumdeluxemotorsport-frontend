import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-panel-content',
  templateUrl: './panel-content.component.html',
  styleUrls: ['./panel-content.component.css']
})
export class PanelContentComponent implements OnInit {
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
