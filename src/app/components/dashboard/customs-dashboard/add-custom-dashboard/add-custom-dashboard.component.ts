import {Component, OnInit} from '@angular/core';
import {VehiculeService} from "../../../../services/vehicule.service";
import {Router} from "@angular/router";
import {Vehicle} from "../../../../models/vehicle";
import {CustomService} from "../../../../services/custom.service";
import {Custom} from "../../../../models/custom";

@Component({
  selector: 'app-add-custom-dashboard',
  templateUrl: './add-custom-dashboard.component.html',
  styleUrls: ['./add-custom-dashboard.component.css']
})
export class AddCustomDashboardComponent implements OnInit {
	colors: string[] = ['RED', 'GREEN', 'BLUE', 'WHITE', 'BLACK', 'CYAN', 'MAGENTA', 'YELLOW'];
	stages: number[] = [1, 2, 3, 4];
	vehicles: Vehicle[] = [];
	color: string = "";
	stage: number = 0;
	vehicle: number = 0;
	price: number = 1000;

	constructor(private service: CustomService, private vService: VehiculeService, private router: Router) {}

	ngOnInit(): void {
		this.vService.getVehicles().subscribe({
			next: data => this.vehicles = data,
			error: err => console.error(err)
		})
	}

	onSubmit(form: any): void {
		const custon: Custom = {
			id: 0,
			couleur: this.color,
			stage: this.stage,
			prixCustom: this.price,
			vehiculeId: this.vehicle
		}
		this.service.addCustom(custon).subscribe({
			next: () => this.router.navigate(["/dashboard/customs"]),
			error: err => console.error(err)
		})
	}
}
