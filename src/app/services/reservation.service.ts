import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reservation} from "../models/reservation";
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  	constructor(private http: HttpClient) { }

	getReservations(): Observable<Reservation[]> {
		return this.http.get<Reservation[]>(`${environment.api}/Reservations`);
	}

	getReservationById(id: number): Observable<Reservation> {
		return this.http.get<Reservation>(`${environment.api}/Reservations/${id}`);
	}

	addReservation(Reservation: Reservation): Observable<Reservation> {
		return this.http.post<Reservation>(`${environment.api}/Reservations`, Reservation);
	}

	updateReservation(Reservation: Reservation): Observable<Reservation> {
		return this.http.put<Reservation>(`${environment.api}/Reservations/${Reservation.id}`, Reservation);
	}

	deleteReservation(id: number): Observable<void> {
		return this.http.delete<void>(`${environment.api}/Reservations/${id}`);
	}

}
