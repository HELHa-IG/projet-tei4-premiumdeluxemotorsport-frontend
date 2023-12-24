import {Component, OnInit} from '@angular/core';
import {Custom} from "../../../models/custom";
import {Commande} from "../../../models/commande";
import {CommandeService} from "../../../services/commande.service";
import {ActivatedRoute, Router} from "@angular/router";
import {VehiculeService} from "../../../services/vehicule.service";
import {Vehicle} from "../../../models/vehicle";
import {CustomService} from "../../../services/custom.service";
import {AuthenticationService} from "../../../services/authentication.service";
import {delay} from "rxjs";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{
	custom!: Custom;
	command!: Commande;
	vehicle: Vehicle = {
		vehiculeId: 0,
		marque: "string",
		model: "string",
		prix: 0,
		image: ""
	};

	constructor(private commandeService: CommandeService, private vehiculeService : VehiculeService, private customService: CustomService,private router: Router, private activeRouter: ActivatedRoute, private authService: AuthenticationService) {
	}

	ngOnInit(): void {
		const vehiculeId = parseInt(<string>this.activeRouter.snapshot.paramMap.get("id"))
		this.custom = {
			id:0,
			couleur: "",
			stage: 1,
			prixCustom: 0,
			vehiculeId: vehiculeId
		}
		this.command = {
			id: 0,
			date: new Date(),
			customId: 0,
			vehiculeId: vehiculeId,
			userId: this.authService.getUserId()
		}

        this.vehiculeService.getVehicleById(vehiculeId).subscribe({
			next:(vehicle) => {
				this.vehicle = vehicle
			},
			error: error => console.log(error)
		})

    }

	buy(){
		this.customService.addCustom(this.custom).subscribe({
			next:(data) => {
				this.command.customId = data.id
				this.commandeService.addCommande(this.command).subscribe({
					next:() => this.router.navigate(["thanks"]),
					error: error => console.log(error)
				})
			},
			error : error => console.log(error)
		})
	}

	cusPriceWatcher() :void{
		if(this.custom.stage == 1){
			this.custom.prixCustom = 1500
		}else if(this.custom.stage == 2){
			this.custom.prixCustom = 2650
		}else if(this.custom.stage == 3){
			this.custom.prixCustom = 3490
		}
	}
}
