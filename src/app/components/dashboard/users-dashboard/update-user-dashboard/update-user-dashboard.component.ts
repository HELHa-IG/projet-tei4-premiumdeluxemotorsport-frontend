import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {Role} from "../../../../models/role";
import {RoleService} from "../../../../services/role.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-user-dashboard',
  templateUrl: './update-user-dashboard.component.html',
  styleUrls: ['./update-user-dashboard.component.css']
})
export class UpdateUserDashboardComponent  implements OnInit{
	id: number = 0;
	roles: Role[] = [];
	firstname: string = "";
	lastname: string = "";
	email: string = "";
	password: string = "";
	password_confirm: string = "";
	role: number = 0;

	constructor(private service: UserService, private rService: RoleService, private router: Router, private route: ActivatedRoute) {}

	ngOnInit(): void {
		// @ts-ignore
		this.id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
		this.rService.getRoles().subscribe({
			next: data => this.roles = data,
			error: err => console.error(err)
		})
        this.service.getUserById(this.id).subscribe({
			next: data => {
				this.firstname = data.firstname;
				this.lastname = data.lastname;
				this.email = data.email;
				this.role = data.roleID;
			},
			error: err => console.error(err)
		})
    }

	onSubmit(form: any): void {
		const user = {
			id: this.id,
			firstname: this.firstname,
			lastname: this.lastname,
			email: this.email,
			password: this.password,
			roleID: this.role
		};
		if (this.password == this.password_confirm) {
			this.service.updateUser(user).subscribe({
				next: () => this.router.navigate(["/dashboard/users"]),
				error: err => console.error(err)
			})
		}
	}
}
