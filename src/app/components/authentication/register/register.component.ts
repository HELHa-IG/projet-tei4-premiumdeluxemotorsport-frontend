import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	userForm!: FormGroup;

	constructor(private service: AuthenticationService, private router: Router) {}

	ngOnInit(): void {
		this.userForm = new FormGroup({
			id: new FormControl(null),
			firstname: new FormControl(null, [Validators.minLength(5), Validators.required]),
			lastname: new FormControl(null, [Validators.minLength(5), Validators.required]),
			email: new FormControl(null, [Validators.minLength(5), Validators.email, Validators.required]),
			password: new FormControl(null, [Validators.minLength(5), Validators.required]),
			confirmPassword: new FormControl(null, [Validators.minLength(5), Validators.required]),
		})
	}

	onSubmit() {
		const user: User = {
			id: 0,
			firstname: this.userForm.value.firstname,
			lastname: this.userForm.value.lastname,
			email: this.userForm.value.email,
			password: this.userForm.value.password,
			roleID: 1
		}
		this.service.register(user).subscribe({
			next: () => this.router.navigate(['/login']),
			error: err => console.error(err)
		})
	}



}
