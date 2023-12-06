import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { Vehicle } from 'src/app/models/vehicle';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css'],
  providers: [MessageService]
})
export class AddUserDialogComponent implements OnInit {

	vehicle!: Vehicle;
	selectedFile!: File;

	constructor(private vehicleService: VehiculeService, private messageService: MessageService){}

	ngOnInit(){
		this.vehicle = {
			vehiculeId: 0,
			marque: "Pfister",
			model: "Comet S2",
			prix: 325520,
			image: ""
			// image: "assets/test/CometS2.png",
		}
	}

	onFileSelected(event: any): void {
		this.selectedFile = event.target.files[0];
		console.log(this.selectedFile);

	  }

	AddVehicle(){
		// const vehicleNew: Vehicle = {
		// vehiculeId: this.vehicle.vehiculeId,
		// marque: this.vehicle.marque,
		// model: this.vehicle.model,
		// prix: this.vehicle.prix,
		// image: this.vehicle.image,
		// };


		// const subscription = this.vehicleService.addVehicle(vehicleNew).subscribe({
		// 	next: (data) => {
		// 		console.log(data);
		// 		subscription.unsubscribe();
		// 		this.messageService.add({severity:'success', summary: 'Success', detail: 'Vehicle added'});
		// 	},
		// 	error: (error) => {
		// 		console.log(error);
		// 		this.messageService.add({severity:'error', summary: 'Error', detail: 'Vehicle not added'});
		// 	}
		// });
			const subscription = this.vehicleService.addVehicleWithImage(this.vehicle.marque, this.vehicle.model, this.vehicle.prix, this.selectedFile)
			  .subscribe({
				next: (data) => {
					console.log(data);
					this.messageService.add({severity:'success', summary: 'Success', detail: 'Vehicle added'});
					subscription.unsubscribe();
				},
				error: (error) => {
					console.log(error);
					this.messageService.add({severity:'error', summary: 'Error', detail: 'Vehicle not added'});
				}
			  });
	}
	}
