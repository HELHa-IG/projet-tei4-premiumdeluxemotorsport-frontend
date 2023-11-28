
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

	deleteVehicle(vehicleId: number): Observable<Vehicle> {
		return this.http.delete<Vehicle>(`${environment.api}/Vehicules/${vehicleId}`);
	}

	updateVehicle(vehicle: Vehicle): Observable<Vehicle>{
		return this.http.put<Vehicle>(`${environment.api}/Vehicules/${vehicle.vehiculeId}`, vehicle);
	}

}
