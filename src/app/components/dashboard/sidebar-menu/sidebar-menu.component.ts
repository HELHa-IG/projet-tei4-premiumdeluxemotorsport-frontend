import { Component } from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";
import { ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent {

	constructor(private service: AuthenticationService, private router: Router, private location: Location) {}

	logout() {
		this.service.removeToken();
		this.router.navigate(['/']);
	}

	isAdmin(): boolean {
		return this.service.getUserRole().toUpperCase() == "ADMIN";
	}

	isActive(path: string): boolean {
		return this.location.path(false).includes(path);
	}

	protected readonly console = console;
}
