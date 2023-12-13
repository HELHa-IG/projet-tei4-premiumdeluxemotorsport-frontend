import { Component } from '@angular/core';
import {User} from "../../models/user";
import {ReservationService} from "../../services/reservation.service";
import {UserService} from "../../services/user.service";
import {VehiculeService} from "../../services/vehicule.service";
import {Router} from "@angular/router";
import {Reservation} from "../../models/reservation";
import {AuthenticationService} from "../../services/authentication.service";
import {Vehicle} from "../../models/vehicle";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent {
	reservations: Reservation[] = [];
	vehicles: Vehicle[] = [];
	date: Date = new Date();
	vehicle: number = 0;
	data: Reservation[] = [];
	current = 1;
	max = 5;

	constructor(private service: ReservationService, private authService: AuthenticationService, private vService: VehiculeService, private router: Router) {}

	ngOnInit(): void {
		this.service.getReservationByUserId(this.authService.getUserId()).subscribe({
			next: data => {
				this.reservations = data
				this.getData()
			},
			error: err => console.error(err)
		})
		this.vService.getVehicles().subscribe({
			next: data => this.vehicles = data,
			error: err => console.error(err)
		})
	}

	onSubmit(form: any): void {
		const reservation: Reservation = {
			id: 0,
			date: this.date,
			userId: this.authService.getUserId(),
			vehiculeId: this.vehicle
		}
		this.service.addReservation(reservation).subscribe({
			next: () => this.ngOnInit(),
			error: err => console.error(err)
		})
	}

	getVehicle(id: number) {
		const vehicle = this.vehicles.filter(v => v.vehiculeId == id)[0];
		return vehicle.marque.toUpperCase() +' '+ vehicle.model;
	}

	getData() {
		const start = (this.current - 1) * this.max;
		this.data = this.reservations.slice(start, start + this.max);
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
		return Math.ceil(this.reservations.length / this.max)

	}

	isNext(): boolean {
		return this.current < this.getTotalPages();
	}

	isPrev(): boolean {
		return this.current > 1;
	}
}
