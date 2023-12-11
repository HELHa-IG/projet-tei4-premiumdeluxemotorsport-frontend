import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.development";
import {Role} from "../models/role";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})

export class RoleService {

  	constructor(private http: HttpClient, private service: AuthenticationService) { }

	getRoles(): Observable<Role[]> {
		const headers = this.service.getHeaders()
		return this.http.get<Role[]>(`${environment.api}/roles`, {headers});
	}

	getRoleById(id: number): Observable<Role> {
		const headers = this.service.getHeaders()
		return this.http.get<Role>(`${environment.api}/roles/${id}`, {headers});
	}

	addRole(Role: Role): Observable<Role> {
		const headers = this.service.getHeaders()
		return this.http.post<Role>(`${environment.api}/roles`, Role, {headers});
	}

	updateRole(Role: Role): Observable<Role> {
		const headers = this.service.getHeaders()
		return this.http.put<Role>(`${environment.api}/roles/${Role.id}`, Role, {headers});
	}

	deleteRole(id: number): Observable<void> {
		const headers = this.service.getHeaders()
		return this.http.delete<void>(`${environment.api}/roles/${id}`, {headers});
	}
}
