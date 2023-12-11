import {Component, OnInit} from '@angular/core';
import {Reservation} from "../../../models/reservation";
import {User} from "../../../models/user";
import {AuthenticationService} from "../../../services/authentication.service";
import {Vehicle} from "../../../models/vehicle";
import {VehiculeService} from "../../../services/vehicule.service";

@Component({
  selector: 'app-vehicles-dashboard',
  templateUrl: './vehicles-dashboard.component.html',
  styleUrls: ['./vehicles-dashboard.component.css']
})
export class VehiclesDashboardComponent implements OnInit {
	vehicles: Vehicle[] = [];
	data: Vehicle[] = [];
	current = 1;
	max = 10;

	constructor(private vService: VehiculeService, private auService: AuthenticationService) {}

	ngOnInit(): void {
		this.vService.getVehicles().subscribe({
			next: data => {
				this.vehicles = data;
				this.getData()
			},
			error: err => console.error(err)
		})

	}


	delete(id: number) {
		this.vService.deleteVehicle(id).subscribe({
			next: data => this.ngOnInit(),
			error: err => console.error(err)
		})
	}

	getData() {
		const start = (this.current - 1) * this.max;
		this.data = this.vehicles.slice(start, start + this.max);
	}

	next() {
		if (this.current < this.getTotalPages()) {
			this.current++;
			this.getData()
		}
	}
	previous() {
		if (this.current > 1) {
			this.current--;
			this.getData()
		}
	}

	getTotalPages(): number {
		return Math.ceil(this.vehicles.length / this.max)

	}

	isNext(): boolean {
		return this.current < this.getTotalPages();
	}

	isPrev(): boolean {
		return this.current > 1;
	}
}
