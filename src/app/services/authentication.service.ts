import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

	private token!: string;
  	constructor(private http: HttpClient) { }

	register(user: User): Observable<User> {
		return this.http.post<User>(`${environment.api}/auth/register`, user);
	}

	login(email: string, password: string): Observable<any> {
		const data = {
		  "email": email,
		  "password": password
		}
		return this.http.post<any>(`${environment.api}/auth/login`, data);
	}

	getToken(): string | null {
  		return localStorage.getItem(this.token);
	}

	setToken(token: string): void {
		localStorage.setItem(this.token, token);
	}

	removeToken(): void {
		localStorage.removeItem(this.token);
	}

	getUserId(): any {
		const token = this.getToken();
		if (token) {
			const tokenParts = token.split('.');
			if (tokenParts.length === 3) {
				const payload = JSON.parse(atob(tokenParts[1]));
				return parseInt(payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid"]);
			}
		} else {
			return null;
		}
	}

	getUserRole(): any {
		  const token = this.getToken();
		  if (token) {
			  const tokenParts = token.split('.');
			  if (tokenParts.length === 3) {
				  const payload = JSON.parse(atob(tokenParts[1]));
				  return payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
			  }
		  } else {
			  return null;
		  }
	}

	getUserEmail(): any {
		const token = this.getToken();
		if (token) {
			const tokenParts = token.split('.');
			if (tokenParts.length === 3) {
				const payload = JSON.parse(atob(tokenParts[1]));
				return payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
			}
		} else {
			return null;
		}
	}

	getHeaders() {
		 return new HttpHeaders({
				'Authorization': 'Bearer ' + this.getToken()
		})
	}

}
