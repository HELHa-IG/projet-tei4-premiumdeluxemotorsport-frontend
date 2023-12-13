import {Component, OnInit} from '@angular/core';
import {User} from "../../../../models/user";
import {ReservationService} from "../../../../services/reservation.service";
import {UserService} from "../../../../services/user.service";
import {VehiculeService} from "../../../../services/vehicule.service";
import {ActivatedRoute, Router} from "@angular/router";
import {data} from "autoprefixer";
import {Reservation} from "../../../../models/reservation";

@Component({
  selector: 'app-update-reservation-dashboard',
  templateUrl: './update-reservation-dashboard.component.html',
  styleUrls: ['./update-reservation-dashboard.component.css']
})
export class UpdateReservationDashboardComponent implements OnInit {
	users: User[] = [];
	vehicles: any[] = [];
	date: string = "";
	client: number = 0;
	vehicle: number = 0;

	constructor(private service: ReservationService, private uService: UserService, private vService: VehiculeService, private router: Router, private route: ActivatedRoute) {}
	ngOnInit(): void {
		// @ts-ignore
		const id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
		this.service.getReservationById(id).subscribe({
			next: data => {
				this.date = this.formatDateTimeForInput(data.date.toString());
				this.client = data.userId;
				this.vehicle = data.vehiculeId;
			},
			error: err => console.error(err)
		})
		this.uService.getUsers().subscribe({
			next: data => this.users = data,
			error: err => console.error(err)
		})
		this.vService.getVehicles().subscribe({
			next: data => {
				this.vehicles = data
			},
			error: err => console.error(err)
		})
	}

	onSubmit(form: any): void {
		// @ts-ignore
		const id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
		const reservation: Reservation = {
			id: id,
			date: new Date(this.date),
			userId: this.client,
			vehiculeId: this.vehicle
		}
		this.service.updateReservation(reservation).subscribe({
			next: () => this.router.navigate(["/dashboard/reservations"]),
			error: err => console.error(err)
		})
	}

	formatDateTimeForInput(dateTimeStr: string) {
		let date = new Date(dateTimeStr);

		let year = date.getFullYear();
		let month = (date.getMonth() + 1).toString().padStart(2, '0');
		let day = date.getDate().toString().padStart(2, '0');
		let hours = date.getHours().toString().padStart(2, '0');
		let minutes = date.getMinutes().toString().padStart(2, '0');

		return `${year}-${month}-${day}T${hours}:${minutes}`;
	}
}
