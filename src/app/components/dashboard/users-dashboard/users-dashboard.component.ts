import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {RoleService} from "../../../services/role.service";
import { User } from 'src/app/models/user';
import {data} from "autoprefixer";
import {Role} from "../../../models/role";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements OnInit {

	users: User[] = [];
	roles: Role[] = [];
	data: User[] = [];
	current = 1;
	max = 10;

	constructor(private uService: UserService, private rService: RoleService, private auService: AuthenticationService) {}

	ngOnInit(): void {
        this.uService.getUsers().subscribe({
			next: data => {
				this.users = data
				this.getData()
			},
			error: err => console.error(err)
		})
		this.rService.getRoles().subscribe(
			data => this.roles = data,
		)
    }

	getRoleName(id: number): string {
		return this.roles.filter(r => r.id == id)[0].name;
	}

	delete(id: number) {
		if (id != this.auService.getUserId() && confirm(`Do you want to delete this user ${id}`)) {
			this.uService.deleteUser(id).subscribe({
				next: data => this.ngOnInit(),
				error: err => console.error(err)
			})
		}
	}

	getData() {
		const start = (this.current - 1) * this.max;
		this.data = this.users.slice(start, start + this.max);
	}

	next() {
		if (this.current < this.getTotalPages()) {
			this.current++;
			this.getData()
		}
	}
	previous() {
		if (this.current > 1) {
			this.current--;
			this.getData()
		}
	}

	getTotalPages(): number {
		return Math.ceil(this.users.length / this.max)

	}

	isNext(): boolean {
		return this.current < this.getTotalPages();
	}

	isPrev(): boolean {
		return this.current > 1;
	}
}
