import {Component, OnInit} from '@angular/core';
import {CommandeService} from "../../../services/commande.service";
import {VehiculeService} from "../../../services/vehicule.service";
import {CustomService} from "../../../services/custom.service";
import {Commande} from "../../../models/commande";
import {Vehicle} from "../../../models/vehicle";
import {Custom} from "../../../models/custom";
import {AuthenticationService} from "../../../services/authentication.service";
import {UserService} from "../../../services/user.service";
import {data} from "autoprefixer";

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit{
	commands : Commande[] = [];
	userId: number = this.authservice.getUserId()

	constructor(private commandeService: CommandeService, private authservice:AuthenticationService) {
	}

	ngOnInit(): void {

		this.commandeService.getCommandesByUserId(this.userId).subscribe({
			next: data => {
				this.commands = data
			}
		}
		)
	}



}
