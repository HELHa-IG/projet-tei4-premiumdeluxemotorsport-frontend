import {Component, OnInit} from '@angular/core';
import {VehiculeService} from "../../../../services/vehicule.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-vehicle-dashboard',
  templateUrl: './update-vehicle-dashboard.component.html',
  styleUrls: ['./update-vehicle-dashboard.component.css']
})
export class UpdateVehicleDashboardComponent implements OnInit {
	img: string = "";
	brand: string = "";
	model: string = "";
	price: string = "";
	image: File | null = null;

	constructor(private service: VehiculeService, private router: Router, private route: ActivatedRoute) {}

	ngOnInit(): void {
		// @ts-ignore
		const id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
		this.service.getVehicleById(id).subscribe({
			next: data => {
				this.img = data.image;
				this.brand = data.marque;
				this.model = data.model;
				this.price = data.prix.toString();
			},
			error: err => console.error(err)
		})
    }

	onSubmit(form: any): void {

		this.service.addVehicleWithImage(this.brand, this.brand, parseFloat(this.price), this.image).subscribe({
			next: () => this.router.navigate(["/dashboard/vehicles"]),
			error: err => console.error(err)
		})
	}
}
