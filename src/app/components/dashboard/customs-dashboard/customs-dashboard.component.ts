import { Component } from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";
import {Custom} from "../../../models/custom";
import {CustomService} from "../../../services/custom.service";
import {Vehicle} from "../../../models/vehicle";
import {VehiculeService} from "../../../services/vehicule.service";

@Component({
  selector: 'app-customs-dashboard',
  templateUrl: './customs-dashboard.component.html',
  styleUrls: ['./customs-dashboard.component.css']
})
export class CustomsDashboardComponent {
	customs: Custom[] = [];
	vehicles: Vehicle[] = [];
	data: Custom[] = [];
	current = 1;
	max = 10;

	constructor(private cService: CustomService, private vService: VehiculeService, private auService: AuthenticationService) {}

	ngOnInit(): void {
		this.cService.getCustoms().subscribe({
			next: data => {
				this.customs = data;
				this.getData()
			},
			error: err => console.error(err)
		})
		this.vService.getVehicles().subscribe({
			next: data => {
				this.vehicles = data;
				this.getData()
			},
			error: err => console.error(err)
		})
	}

	getVehicle(id: number) {
		return this.vehicles.filter(v => v.vehiculeId == id)[0];
	}

	delete(id: number) {
		this.cService.deleteCustom(id).subscribe({
			next: data => this.ngOnInit(),
			error: err => console.error(err)
		})
	}

	getData() {
		const start = (this.current - 1) * this.max;
		this.data = this.customs.slice(start, start + this.max);
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
		return Math.ceil(this.customs.length / this.max)

	}

	isNext(): boolean {
		return this.current < this.getTotalPages();
	}

	isPrev(): boolean {
		return this.current > 1;
	}
}
