import {Component, OnInit} from '@angular/core';
import {VehiculeService} from "../../../../services/vehicule.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-vehicle-dashboard',
  templateUrl: './update-vehicle-dashboard.component.html',
  styleUrls: ['./update-vehicle-dashboard.component.css']
})
export class UpdateVehicleDashboardComponent implements OnInit {
	brand: string = "";
	model: string = "";
	price: string = "";
	image: string = "";

	constructor(private service: VehiculeService, private router: Router, private route: ActivatedRoute) {}

	ngOnInit(): void {
		// @ts-ignore
		const id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
		this.service.getVehicleById(id).subscribe({
			next: data => {
				this.brand = data.marque;
				this.model = data.model;
				this.price = data.model;
			},
			error: err => console.error(err)
		})
    }

	onSubmit(form: any): void {

		const vehicle = {
			vehiculeId: 0,
			marque: this.brand,
			model: this.brand,
			prix: parseFloat(this.price),
			image: this.image
		};
		this.service.addVehicle(vehicle).subscribe({
			next: () => this.router.navigate(["/dashboard/vehicles"]),
			error: err => console.error(err)
		})
	}
}
