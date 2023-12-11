import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";
import {RoleService} from "../../../services/role.service";
import {AuthenticationService} from "../../../services/authentication.service";
import {Reservation} from "../../../models/reservation";
import {ReservationService} from "../../../services/reservation.service";
import {Vehicle} from "../../../models/vehicle";
import {VehiculeService} from "../../../services/vehicule.service";

@Component({
  selector: 'app-reservations-dashboard',
  templateUrl: './reservations-dashboard.component.html',
  styleUrls: ['./reservations-dashboard.component.css']
})
export class ReservationsDashboardComponent implements OnInit {
	reservations: Reservation[] = [];
	users: User[] = [];
	vehicles: Vehicle[] = [];
	data: Reservation[] = [];
	current = 1;
	max = 10;

	constructor(private uService: UserService, private vService: VehiculeService, private rService: ReservationService, private auService: AuthenticationService) {}

	ngOnInit(): void {
		this.rService.getReservations().subscribe({
			next: data => {
				this.reservations = data;
				this.getData()
			},
			error: err => console.error(err)
		})
		this.uService.getUsers().subscribe({
			next: data => this.users = data,
			error: err => console.error(err)
		})
		this.vService.getVehicles().subscribe({
			next: data => this.vehicles = data,
			error: err => console.error(err)
		})

	}

	getClient(id: number): string {
		const user = this.users.filter(u => u.id == id)[0];
		return user.firstname + ' ' + user.lastname.toUpperCase()
	}

	getCar(id: number): string {
		const vehicle = this.vehicles.filter(v => v.vehiculeId == id)[0];
		return vehicle.marque + ' ' + vehicle.model;
	}


	delete(id: number) {
		this.rService.deleteReservation(id).subscribe({
			next: data => this.ngOnInit(),
			error: err => console.error(err)
		});
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
