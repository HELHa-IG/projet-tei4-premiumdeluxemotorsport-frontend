import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user";
import {Role} from "../../../models/role";
import {UserService} from "../../../services/user.service";
import {RoleService} from "../../../services/role.service";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-accounts-dashboard',
  templateUrl: './accounts-dashboard.component.html',
  styleUrls: ['./accounts-dashboard.component.css']
})
export class AccountsDashboardComponent implements OnInit{
	id: number = 0;
	firstname: string = "";
	lastname: string = "";
	email: string = "";
	password: string = "";
	roleID: number = 0;
	pass_curr: string = "";
	pass_new: string = "";
	pass_conf: string = "";

	constructor(private uService: UserService, private rService: RoleService, private aService: AuthenticationService) {}

	ngOnInit(): void {
    	this.uService.getUserById(this.aService.getUserId()).subscribe({
			next: data => {
				this.id = data.id
				this.firstname = data.firstname;
				this.lastname = data.lastname;
				this.email = data.email;
				this.password = data.password;
				this.roleID = data.roleID;
			},
			error: err => console.error(err)
		})

	}

	onSubmit(updateAccount: NgForm) {
		const user = {
			id : this.id,
			firstname : this.firstname,
			lastname : this.lastname,
			email : this.email,
			password : this.password,
			roleID : this.roleID
		};
		this.uService.updateUser(user).subscribe({
			next: () => this.ngOnInit(),
			error: err => console.error(err)
		})
	}
}
