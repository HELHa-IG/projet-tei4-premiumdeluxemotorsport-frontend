import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  	constructor(private http: HttpClient) { }

	getUsers(): Observable<User[]> {
		  return this.http.get<User[]>(`${environment.api}/Users`);
	}

	getUserById(id: number): Observable<User> {
		  return this.http.get<User>(`${environment.api}/Users/${id}`);
	}

	addUser(user: User): Observable<User> {
		return this.http.post<User>(`${environment.api}/Users`, user);
	}

	updateUser(user: User): Observable<User> {
		return this.http.put<User>(`${environment.api}/Users/${user.id}`, user);
	}

	deleteUser(id: number): Observable<void> {
		return this.http.delete<void>(`${environment.api}/Users/${id}`);
	}

}
