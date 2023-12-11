import {Component, OnInit} from '@angular/core';
import {Role} from "../../../models/role";
import {RoleService} from "../../../services/role.service";
import {data} from "autoprefixer";
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";
import {HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-roles-dashboard',
  templateUrl: './roles-dashboard.component.html',
  styleUrls: ['./roles-dashboard.component.css']
})
export class RolesDashboardComponent implements OnInit {

	roles: Role[] = [];
	users: User[] = [];
	data: Role[] = [];
	current = 1;
	max = 10;

	constructor(private rService: RoleService, private uService: UserService) {}

	ngOnInit(): void {
        this.rService.getRoles().subscribe({
			next: data => {
				this.roles = data
				this.getData()
			},
			error: err => console.log(err)
		})
		this.uService.getUsers().subscribe({
			next: data => this.users = data,
			error: err => console.log(err)
		})
    }

	getRoleAccount(id: number): number {
		return this.users.filter(u => u.roleID == id).length
	}

	delete(id: number) {
		if (confirm(`Do you want to delete this item ${id}`)) {
			this.rService.deleteRole(id).subscribe({
				next: data => this.ngOnInit(),
				error: err => console.error(err)
			})
		}
	}

	getData() {
		const start = (this.current - 1) * this.max;
		this.data = this.roles.slice(start, start + this.max);
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
		return Math.ceil(this.roles.length / this.max)

	}

	isNext(): boolean {
		return this.current < this.getTotalPages();
	}

	isPrev(): boolean {
		return this.current > 1;
	}

}
