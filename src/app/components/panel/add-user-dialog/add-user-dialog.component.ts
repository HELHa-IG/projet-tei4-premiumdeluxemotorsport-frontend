import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Vehicle } from 'src/app/models/vehicle';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent implements OnInit {
	vehicles!: Vehicle[];

	loading: boolean = true;

	activityValues: number[] = [0, 100];


	constructor(private vehicleService: VehiculeService){}

	ngOnInit() {
		this.vehicleService.getVehicles().subscribe({
			next: (vehicles) => {
				this.vehicles = vehicles;
				this.loading = false;
			},
			error: (error) => {
				this.vehicles = [];
				console.log(error);
			}
				// this.vehicles.forEach((vehicles) => (vehicles.date = new Date(<Date>vehicles.date)));
				});
			}

			clear(table: Table) {
				table.clear();
			}

	}
