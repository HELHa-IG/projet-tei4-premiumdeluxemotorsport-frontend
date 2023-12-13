import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs";
import {Commande} from "../models/commande";
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient, private service: AuthenticationService) { }

	getCommandes(): Observable<Commande[]>{
	  const headers : HttpHeaders = this.service.getHeaders()
		return this.http.get<Commande[]>(`${environment.api}/commandes`, {headers})
	}

	getCommandeById(id: number): Observable<Commande> {
		const headers = this.service.getHeaders()
		return this.http.get<Commande>(`${environment.api}/commandes/${id}`, {headers});
	}

	addCommande(commande: Commande): Observable<Commande> {
		const headers = this.service.getHeaders()
		return this.http.post<Commande>(`${environment.api}/commandes`, commande, {headers});
	}

	updateCommande(commande: Commande): Observable<Commande> {
		const headers = this.service.getHeaders()
		return this.http.put<Commande>(`${environment.api}/commandes/${commande.id}`, commande, {headers});
	}

	deleteCommande(id: number): Observable<void> {
		const headers = this.service.getHeaders()
		return this.http.delete<void>(`${environment.api}/commandes/${id}`, {headers});
	}


}
