import {Component, OnInit} from '@angular/core';
import {Vehicle} from "../../../../models/vehicle";
import {CustomService} from "../../../../services/custom.service";
import {VehiculeService} from "../../../../services/vehicule.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Custom} from "../../../../models/custom";

@Component({
  selector: 'app-update-custom-dashboard',
  templateUrl: './update-custom-dashboard.component.html',
  styleUrls: ['./update-custom-dashboard.component.css']
})
export class UpdateCustomDashboardComponent implements OnInit {
	colors: string[] = ['RED', 'GREEN', 'BLUE', 'WHITE', 'BLACK', 'CYAN', 'MAGENTA', 'YELLOW'];
	stages: number[] = [1, 2, 3, 4];
	vehicles: Vehicle[] = [];
	color: string = "RED";
	stage: number = 0;
	vehicle: number = 0;
	price: number = 1000;

	constructor(private service: CustomService, private vService: VehiculeService, private router: Router, private route: ActivatedRoute) {}

	ngOnInit(): void {
		// @ts-ignore
		const id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
		this.service.getCustomById(id).subscribe({
			next: data => {
				this.color = data.couleur;
				this.stage = data.stage;
				this.price = data.prixCustom;
				this.vehicle = data.vehiculeId;
			},
			error: err => console.error(err)
		})
		this.vService.getVehicles().subscribe({
			next: data => this.vehicles = data,
			error: err => console.error(err)
		})
	}

	onSubmit(form: any): void {
		// @ts-ignore
		const id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
		const custon: Custom = {
			id: id,
			couleur: this.color,
			stage: this.stage,
			prixCustom: this.price,
			vehiculeId: this.vehicle
		}
		console.log(custon)

		this.service.updateCustom(custon).subscribe({
			next: () => this.router.navigate(["/dashboard/customs"]),
			error: err => console.error(err)
		})
	}
}
