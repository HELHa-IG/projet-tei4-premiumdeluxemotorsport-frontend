import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.development";
import {Custom} from "../models/custom";

@Injectable({
  providedIn: 'root'
})
export class CustomService {


	constructor(private http: HttpClient, private service: AuthenticationService) { }

	getCustoms(): Observable<Custom[]>{
		const headers : HttpHeaders = this.service.getHeaders()
		return this.http.get<Custom[]>(`${environment.api}/customs`, {headers})
	}

	getCustomById(id: number): Observable<Custom> {
		const headers = this.service.getHeaders()
		return this.http.get<Custom>(`${environment.api}/customs/${id}`, {headers});
	}

	addCustom(custom: Custom): Observable<Custom> {
		const headers = this.service.getHeaders()
		return this.http.post<Custom>(`${environment.api}/customs`, custom, {headers});
	}

	updateCustom(custom: Custom): Observable<Custom> {
		const headers = this.service.getHeaders()
		return this.http.put<Custom>(`${environment.api}/Customs/${custom.id}`, custom, {headers});
	}

	deleteCustom(id: number): Observable<void> {
		const headers = this.service.getHeaders()
		return this.http.delete<void>(`${environment.api}/Customs/${id}`, {headers});
	}
}
