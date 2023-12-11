import {Component, OnInit} from '@angular/core';
import {ReservationService} from "../../../../services/reservation.service";
import {UserService} from "../../../../services/user.service";
import {VehiculeService} from "../../../../services/vehicule.service";
import {User} from "../../../../models/user";

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

	constructor(private service: ReservationService, private uService: UserService, private vService: VehiculeService) {}

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

	}
}
