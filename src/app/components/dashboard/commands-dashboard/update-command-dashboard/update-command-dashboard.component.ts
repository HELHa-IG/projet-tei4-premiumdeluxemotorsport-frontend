import {Component, OnInit} from '@angular/core';
import {User} from "../../../../models/user";
import {Vehicle} from "../../../../models/vehicle";
import {Custom} from "../../../../models/custom";
import {CommandeService} from "../../../../services/commande.service";
import {UserService} from "../../../../services/user.service";
import {VehiculeService} from "../../../../services/vehicule.service";
import {CustomService} from "../../../../services/custom.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Commande} from "../../../../models/commande";

@Component({
  selector: 'app-update-command-dashboard',
  templateUrl: './update-command-dashboard.component.html',
  styleUrls: ['./update-command-dashboard.component.css']
})
export class UpdateCommandDashboardComponent implements OnInit {
	users: User[] = [];
	vehicles: Vehicle[] = [];
	customs: Custom[] = [];
	date: string = "";
	custom: number = 0;
	client: number = 0;
	vehicle: number = 0;

	constructor(private service: CommandeService,
				private uService: UserService,
				private vService: VehiculeService,
				private cService: CustomService,
				private route: ActivatedRoute,
				private router: Router) {}

	ngOnInit(): void {
		// @ts-ignore
		const id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
		this.service.getCommandeById(id).subscribe({
			next: data => {
				this.date = this.formatDateTimeForInput(data.date.toString());
				this.custom = data.customId;
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
			next: data => this.vehicles = data,
			error: err => console.error(err)
		})
		this.cService.getCustoms().subscribe({
			next: data => this.customs = data,
			error: err => console.error(err)
		})
	}

	onSubmit(form: any): void {
		// @ts-ignore
		const id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
		const command: Commande = {
			id: id,
			date: new Date(this.date),
			customId: this.custom,
			userId: this.client,
			vehiculeId: this.vehicle
		}
		this.service.updateCommande(command).subscribe({
			next: () => this.router.navigate(["/dashboard/commands"]),
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
