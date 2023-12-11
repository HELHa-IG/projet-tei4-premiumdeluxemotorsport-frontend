import {Component, OnInit} from '@angular/core';
import {User} from "../../../../models/user";
import {ReservationService} from "../../../../services/reservation.service";
import {UserService} from "../../../../services/user.service";
import {VehiculeService} from "../../../../services/vehicule.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-reservation-dashboard',
  templateUrl: './update-reservation-dashboard.component.html',
  styleUrls: ['./update-reservation-dashboard.component.css']
})
export class UpdateReservationDashboardComponent implements OnInit {
	users: User[] = [];
	vehicles: any[] = [];
	date: Date = new Date();
	client: number = 0;
	vehicle: number = 0;

	constructor(private service: ReservationService, private uService: UserService, private vService: VehiculeService, private router: Router, private route: ActivatedRoute) {}
	ngOnInit(): void {
		// @ts-ignore
		const id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
		console.log(id)
		this.service.getReservationById(id).subscribe({
			next: data => {
				console.log(data)
				this.date = data.date;
				this.client = data.userId;
				this.vehicle = data.vehicleId;
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

	onSubmit(form: any): void {

	}
}
