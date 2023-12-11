import { Component } from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

	constructor(private service: AuthenticationService) {}

	isConnected(): boolean {
		return this.service.getToken() != null;
	}

}
