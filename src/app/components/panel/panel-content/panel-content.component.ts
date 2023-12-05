import { Component, OnDestroy, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle';
import { VehiculeService } from 'src/app/services/vehicule.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TestimonialsComponent } from '../../homepage/testimonials/testimonials.component';
import { MessageService } from 'primeng/api';
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';

@Component({
  selector: 'app-panel-content',
  templateUrl: './panel-content.component.html',
  styleUrls: ['./panel-content.component.css'],
  providers: [DialogService, MessageService]
})
export class PanelContentComponent implements OnInit, OnDestroy {
	vehicles!: Vehicle[];
	vehicle!: Vehicle;


	ref: DynamicDialogRef | undefined;

	constructor(private vehicleService: VehiculeService, public dialogService: DialogService, public messageService: MessageService){}
	ngOnDestroy(): void {
		if (this.ref) {
			this.ref.close();
		}
	}

	ngOnInit() {
		this.vehicleService.getVehicles().subscribe({
			next: (data) => {
				this.vehicles = data;
			},
			error: (error) => {
				this.vehicles = [];
				console.log(error);

			}
		});
	}

	show() {
		this.ref = this.dialogService.open(AddUserDialogComponent, {
			header: 'Add vehicle',
			width: '70%',
			contentStyle: { overflow: 'auto' },
			baseZIndex: 10000,
			maximizable: true
		});

		this.ref.onClose.subscribe((vehicle: Vehicle) => {
			if (vehicle) {
				this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: vehicle.model });
			}
		});

		this.ref.onMaximize.subscribe((value) => {
			this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
		});
	}


	AddVehicle(){
		// fonction qui est actionner par un button et qui permet d'ajouter un nouveau type de vehicle
	}

}
