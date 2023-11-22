
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
		return this.http.get<Vehicle>(`${environment.api}/vehicles/${vehicleId}`);
	}

	getVehicles(): Observable<Vehicle[]> {
		return this.http.get<Vehicle[]>(`${environment.api}/vehicles`);
	}

	addVehicle(vehicle: Vehicle): Observable<Vehicle> {
		return this.http.post<Vehicle>(`${environment.api}/vehicules`, vehicle);
	}

	deleteVehicle(vehicleId: number): Observable<Vehicle> {
		return this.http.delete<Vehicle>(`${environment.api}/vehicles/${vehicleId}`);
	}

	updateVehicle(vehicle: Vehicle): Observable<Vehicle>{
		return this.http.put<Vehicle>(`${environment.api}/vehicles/${vehicle.id}`, vehicle);
	}

}
