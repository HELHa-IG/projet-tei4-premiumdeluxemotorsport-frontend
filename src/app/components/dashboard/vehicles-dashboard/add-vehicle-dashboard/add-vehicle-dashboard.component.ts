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
	price!: number;
	selectedFile!: File;

	constructor(private service: VehiculeService, private router: Router) {}


	onFileSelected(event: any) {
		this.selectedFile = event.target.files[0];
	}

	onSubmit(form: any): void {
		const subscription = this.service.addVehicleWithImage(this.brand, this.model, this.price, this.selectedFile).subscribe({
			next: (data: any) => {
				subscription.unsubscribe();
			},
			error: (error: any) => {
				console.log(error)
				alert("Une erreur est survenue lors de l'ajout du véhicule");
				subscription.unsubscribe();
			}}
		);
	}
}
