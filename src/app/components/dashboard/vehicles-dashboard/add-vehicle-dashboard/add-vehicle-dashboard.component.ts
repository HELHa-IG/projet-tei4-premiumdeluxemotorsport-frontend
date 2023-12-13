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
	image: File | null = null;

	constructor(private service: VehiculeService, private router: Router) {}

	onSubmit(form: any): void {
		this.service.addVehicleWithImage(this.brand, this.brand, parseFloat(this.price), this.image).subscribe({
			next: () => this.router.navigate(["/dashboard/vehicles"]),
			error: err => console.error(err)
		});
	}
}
