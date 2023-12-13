import { Component } from '@angular/core';
import {RoleService} from "../../../../services/role.service";
import {Role} from "../../../../models/role";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-role-dashboard',
  templateUrl: './add-role-dashboard.component.html',
  styleUrls: ['./add-role-dashboard.component.css']
})
export class AddRoleDashboardComponent {
	name: string = "";
	description: string = "";

	constructor(private service: RoleService, private router: Router) {}

	onSubmit(form: any): void {
		const role: Role = {
			id: 0,
			name: this.name,
			description: this.description
		}
		this.service.addRole(role).subscribe({
			next: () => this.router.navigate(["/dashboard/roles"]),
			error: err => console.log(err)
		})
	}

}
