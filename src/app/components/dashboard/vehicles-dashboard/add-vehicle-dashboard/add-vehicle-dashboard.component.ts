import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {VehiculeService} from "../../../../services/vehicule.service";

@Component({
  selector: 'app-add-vehicle-dashboard',
  templateUrl: './add-vehicle-dashboard.component.html',
  styleUrls: ['./add-vehicle-dashboard.component.css']
})
export class AddVehicleDashboardComponent {
	brand: string = "";
	model: string = "";
	price: string = "";
	image: string = "";
	password_confirm: string = "";
	role: number = 0;

	constructor(private service: VehiculeService, private router: Router) {}

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
