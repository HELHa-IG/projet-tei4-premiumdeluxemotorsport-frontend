import { Commande } from "./commande";
import { Custom } from "./custom";
import { Reservation } from "./reservation";

export interface Vehicle {
	vehiculeId: number;
	marque: string;
  	model: string;
  	prix: number;
	image: string;
	// Customs: Custom[];
	// Commandes: Commande[];
	// Reservations: Reservation[];

}
