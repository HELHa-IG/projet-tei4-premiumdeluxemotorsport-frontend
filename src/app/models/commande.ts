import {Custom} from "./custom";
import {User} from "./user";
import {Vehicle} from "./vehicle";

export interface Commande {
	id: number;
	date: Date;
	customId: number;
	vehiculeId: number;
	userId: number;
	vehicule?: Vehicle;
}
