import {Component, OnInit} from '@angular/core';
import {ReservationService} from "../../../../services/reservation.service";
import {UserService} from "../../../../services/user.service";
import {VehiculeService} from "../../../../services/vehicule.service";
import {User} from "../../../../models/user";
import {Reservation} from "../../../../models/reservation";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-reservation-dashboard',
  templateUrl: './add-reservation-dashboard.component.html',
  styleUrls: ['./add-reservation-dashboard.component.css']
})
export class AddReservationDashboardComponent implements OnInit{
	users: User[] = [];
	vehicles: any[] = [];
	date: Date = new Date();
	client: number = 0;
	vehicle: number = 0;

	constructor(private service: ReservationService, private uService: UserService, private vService: VehiculeService, private router: Router) {}

	ngOnInit(): void {
        this.uService.getUsers().subscribe({
			next: data => this.users = data,
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
			userId: this.client,
			vehiculeId: this.vehicle
		}
		this.service.addReservation(reservation).subscribe({
			next: () => this.router.navigate(["/dashboard/reservations"]),
			error: err => console.error(err)
		})
	}
}
