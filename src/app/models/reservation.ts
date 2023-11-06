import {User} from "./user";
import {Vehicle} from "./vehicle";

export interface Reservation {
	id: number;
	date: Date;
	user: User;
	vehicle: Vehicle;
}
