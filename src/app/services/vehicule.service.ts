
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor(private http: HttpClient) { }

	getVehicleById(vehicleId: number): Observable<Vehicle> {
		return this.http.get<Vehicle>(`${environment.api}/Vehicules/${vehicleId}`);
	}

	getVehicles(): Observable<Vehicle[]> {
		return this.http.get<Vehicle[]>(`${environment.api}/Vehicules`);
	}

	addVehicle(vehicle: Vehicle): Observable<Vehicle> {
		return this.http.post<Vehicle>(`${environment.api}/Vehicules`, vehicle);
	}

	addVehicleWithImage(marque: string, model: string, prix: number, file: File | null){
		const formData = new FormData();
		formData.append('marque', marque);
		formData.append('model', model);
		formData.append('prix', prix.toString());
		if(file != null){
			formData.append('file', file);
		}

		return this.http.post(`${environment.api}/Vehicules`, formData);

	}

	deleteVehicle(vehicleId: number): Observable<Vehicle> {
		return this.http.delete<Vehicle>(`${environment.api}/Vehicules/${vehicleId}`);
	}

	updateVehicle(vehicle: Vehicle): Observable<Vehicle>{
		return this.http.put<Vehicle>(`${environment.api}/Vehicules/${vehicle.vehiculeId}`, vehicle);
	}

}
