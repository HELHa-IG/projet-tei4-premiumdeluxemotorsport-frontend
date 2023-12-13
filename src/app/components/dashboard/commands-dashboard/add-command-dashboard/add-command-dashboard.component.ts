import {Component, OnInit} from '@angular/core';
import {User} from "../../../../models/user";
import {ReservationService} from "../../../../services/reservation.service";
import {UserService} from "../../../../services/user.service";
import {VehiculeService} from "../../../../services/vehicule.service";
import {Router} from "@angular/router";
import {Reservation} from "../../../../models/reservation";
import {Vehicle} from "../../../../models/vehicle";
import {Custom} from "../../../../models/custom";
import {CommandeService} from "../../../../services/commande.service";
import {CustomService} from "../../../../services/custom.service";
import {Commande} from "../../../../models/commande";

@Component({
  selector: 'app-add-command-dashboard',
  templateUrl: './add-command-dashboard.component.html',
  styleUrls: ['./add-command-dashboard.component.css']
})
export class AddCommandDashboardComponent implements OnInit {
	users: User[] = [];
	vehicles: Vehicle[] = [];
	customs: Custom[] = [];
	date: Date = new Date();
	custom: number = 0;
	client: number = 0;
	vehicle: number = 0;

	constructor(private service: CommandeService,
				private uService: UserService,
				private vService: VehiculeService,
				private cService: CustomService,
				private router: Router) {}

	ngOnInit(): void {
		this.uService.getUsers().subscribe({
			next: data => this.users = data,
			error: err => console.error(err)
		})
		this.vService.getVehicles().subscribe({
			next: data => this.vehicles = data,
			error: err => console.error(err)
		})
		this.cService.getCustoms().subscribe({
			next: data => this.customs = data,
			error: err => console.error(err)
		})
	}

	onSubmit(form: any): void {
		const command: Commande = {
			id: 0,
			date: this.date,
			customId: this.custom,
			userId: this.client,
			vehiculeId: this.vehicle
		}
		this.service.addCommande(command).subscribe({
			next: () => this.router.navigate(["/dashboard/commands"]),
			error: err => console.error(err)
		})
	}
}
