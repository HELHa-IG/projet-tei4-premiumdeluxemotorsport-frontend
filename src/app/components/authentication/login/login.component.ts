import { Component } from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
	email: string = "";
	password: string = "";

	constructor(private service: AuthenticationService, private router: Router) {}

	onSubmit(form: any): void {
		this.service.login(this.email, this.password).subscribe({
			next: data => {
				this.service.setToken(data.token);
				if (this.service.getUserRole().toUpperCase() == 'ADMIN')
					this.router.navigate(['dashboard'])
				else
					this.router.navigate(['vehicles'])
			},
			error: err => console.error(err)
		})
	}

}
