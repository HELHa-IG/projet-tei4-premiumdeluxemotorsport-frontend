import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {Router} from "@angular/router";
import {RoleService} from "../../../../services/role.service";
import {Role} from "../../../../models/role";
import {data} from "autoprefixer";

@Component({
  selector: 'app-add-user-dashboard',
  templateUrl: './add-user-dashboard.component.html',
  styleUrls: ['./add-user-dashboard.component.css']
})
export class AddUserDashboardComponent implements OnInit {

	roles: Role[] = [];
	firstname: string = "";
	lastname: string = "";
	email: string = "";
	password: string = "";
	password_confirm: string = "";
	role: number = 0;

	constructor(private service: UserService, private rService: RoleService, private router: Router) {}

	ngOnInit(): void {
        this.rService.getRoles().subscribe({
			next: data => this.roles = data,
			error: err => console.error(err)
		})
    }

	onSubmit(form: any): void {
		const user = {
			id: 0,
			firstname: this.firstname,
			lastname: this.lastname,
			email: this.email,
			password: this.password,
			roleID: this.role
		};
		if (this.password == this.password_confirm || (this.password == null && this.password_confirm == null)) {
			this.service.addUser(user).subscribe({
				next: () => this.router.navigate(["/dashboard/users"]),
				error: err => console.error(err)
			})
		}
	}
}
