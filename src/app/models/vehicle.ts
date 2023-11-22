import { Commande } from "./commande";
import { Custom } from "./custom";
import { Reservation } from "./reservation";

export interface Vehicle {
	id: number;
	brand: string;
  	model: string;
  	price: number;
	Image: string;
	NbrSiege: number;
	Customs: Custom[];
	Commandes: Commande[];
	Reservations: Reservation[];

}
