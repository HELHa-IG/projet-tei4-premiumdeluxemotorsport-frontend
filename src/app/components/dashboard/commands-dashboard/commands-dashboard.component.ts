import { Component } from '@angular/core';
import {Vehicle} from "../../../models/vehicle";
import {VehiculeService} from "../../../services/vehicule.service";
import {AuthenticationService} from "../../../services/authentication.service";
import {CommandeService} from "../../../services/commande.service";
import {CustomService} from "../../../services/custom.service";
import {UserService} from "../../../services/user.service";
import {Commande} from "../../../models/commande";
import { User } from 'src/app/models/user';
import {Custom} from "../../../models/custom";

@Component({
  selector: 'app-commands-dashboard',
  templateUrl: './commands-dashboard.component.html',
  styleUrls: ['./commands-dashboard.component.css']
})
export class CommandsDashboardComponent {
	commands: Commande[] = [];
	users: User[] = [];
	customs: Custom[] = [];
	vehicles: Vehicle[] = [];
	data: Commande[] = [];
	current = 1;
	max = 10;

	constructor(private cmService: CommandeService,
				private cuService: CustomService,
				private vService: VehiculeService,
				private uService: UserService,
				private auService: AuthenticationService) {}

	ngOnInit(): void {
		this.cmService.getCommandes().subscribe({
			next: data => {
				this.commands = data;
				this.getData()
			},
			error: err => console.error(err)
		});
		this.uService.getUsers().subscribe({
			next: data => this.users = data,
			error: err => console.error(err)
		});
		this.cuService.getCustoms().subscribe({
			next: data => this.customs = data,
			error: err => console.error(err)
		});
		this.vService.getVehicles().subscribe({
			next: data => this.vehicles = data,
			error: err => console.error(err)
		});
	}

	getClient(id: number): string {
		const user = this.users.filter(u => u.id == id)[0];
		return user.firstname + ' ' + user.lastname.toUpperCase()
	}

	getVehicle(id: number): string {
		const vehicle = this.vehicles.filter(v => v.vehiculeId == id)[0];
		return vehicle.marque + ' ' + vehicle.model;
	}


	delete(id: number) {
		this.cmService.deleteCommande(id).subscribe({
			next: data => this.ngOnInit(),
			error: err => console.error(err)
		})
	}

	getData() {
		const start = (this.current - 1) * this.max;
		this.data = this.commands.slice(start, start + this.max);
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
		return Math.ceil(this.commands.length / this.max)

	}

	isNext(): boolean {
		return this.current < this.getTotalPages();
	}

	isPrev(): boolean {
		return this.current > 1;
	}
}
