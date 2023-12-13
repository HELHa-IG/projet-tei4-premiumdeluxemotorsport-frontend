import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reservation} from "../models/reservation";
import {environment} from "../../environments/environment.development";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  	constructor(private http: HttpClient, private service: AuthenticationService) { }

	getReservations(): Observable<Reservation[]> {
		const headers = this.service.getHeaders()
		return this.http.get<Reservation[]>(`${environment.api}/reservations`, {headers});
	}

	getReservationById(id: number): Observable<Reservation> {
		const headers = this.service.getHeaders()
		return this.http.get<Reservation>(`${environment.api}/reservations/${id}`, {headers});
	}

	getReservationByUserId(id: number): Observable<Reservation[]> {
		const headers = this.service.getHeaders()
		return this.http.get<Reservation[]>(`${environment.api}/reservations/user/${id}`, {headers});
	}

	addReservation(reservation: Reservation): Observable<Reservation> {
		const headers = this.service.getHeaders()
		return this.http.post<Reservation>(`${environment.api}/reservations`, reservation, {headers});
	}

	updateReservation(reservation: Reservation): Observable<Reservation> {
		const headers = this.service.getHeaders()
		return this.http.put<Reservation>(`${environment.api}/reservations/${reservation.id}`, reservation, {headers});
	}

	deleteReservation(id: number): Observable<void> {
		const headers = this.service.getHeaders()
		return this.http.delete<void>(`${environment.api}/reservations/${id}`, {headers});
	}

}
