
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle';
import { environment } from 'src/environments/environment.development';
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor(private http: HttpClient, private service: AuthenticationService) { }

	getVehicleById(vehicleId: number): Observable<Vehicle> {
		const headers : HttpHeaders = this.service.getHeaders()
		return this.http.get<Vehicle>(`${environment.api}/Vehicules/${vehicleId}`, {headers});
	}

	getVehicles(): Observable<Vehicle[]> {
		const headers : HttpHeaders = this.service.getHeaders()
		return this.http.get<Vehicle[]>(`${environment.api}/Vehicules`, {headers});
	}

	addVehicle(vehicle: Vehicle): Observable<Vehicle> {
		const headers : HttpHeaders = this.service.getHeaders()
		return this.http.post<Vehicle>(`${environment.api}/Vehicules`, vehicle, {headers});
	}

	addVehicleWithImage(marque: string, model: string, prix: number, file: File | null){
		const formData = new FormData();
		formData.append('marque', marque);
		formData.append('model', model);
		formData.append('prix', prix.toString());
		if(file != null){
			formData.append('file', file);
		}
		const headers : HttpHeaders = this.service.getHeaders()
		return this.http.post(`${environment.api}/Vehicules`, formData, {headers});

	}

	deleteVehicle(vehicleId: number): Observable<Vehicle> {
		const headers : HttpHeaders = this.service.getHeaders()
		return this.http.delete<Vehicle>(`${environment.api}/Vehicules/${vehicleId}`, {headers});
	}

	updateVehicle(vehicle: Vehicle): Observable<Vehicle>{
		const headers : HttpHeaders = this.service.getHeaders()
		return this.http.put<Vehicle>(`${environment.api}/Vehicules/${vehicle.vehiculeId}`, vehicle, {headers});
	}

}
