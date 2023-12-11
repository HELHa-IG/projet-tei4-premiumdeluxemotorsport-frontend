import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {environment} from "../../environments/environment.development";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  	constructor(private http: HttpClient, private service: AuthenticationService) { }

	getUsers(): Observable<User[]> {
		const headers = this.service.getHeaders();
	  	return this.http.get<User[]>(`${environment.api}/Users`, {headers});
	}

	getUserById(id: number): Observable<User> {
		const headers = this.service.getHeaders();
		return this.http.get<User>(`${environment.api}/Users/${id}`, {headers});
	}

	addUser(user: User): Observable<User> {
		const headers = this.service.getHeaders();
		return this.http.post<User>(`${environment.api}/Users`, user, {headers});
	}

	updateUser(user: User): Observable<User> {
		const headers = this.service.getHeaders();
		return this.http.put<User>(`${environment.api}/Users/${user.id}`, user, {headers});
	}

	deleteUser(id: number): Observable<void> {
		const headers = this.service.getHeaders();
		return this.http.delete<void>(`${environment.api}/Users/${id}`, {headers});
	}

}
