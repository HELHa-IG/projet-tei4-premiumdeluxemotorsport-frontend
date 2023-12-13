import {Custom} from "./custom";
import {User} from "./user";
import {Vehicle} from "./vehicle";

export interface Commande {
	id: number;
	date: Date;
	user: User;
	Custom: Custom;
	vehicule: Vehicle;

}
