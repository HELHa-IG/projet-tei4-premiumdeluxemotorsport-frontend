import {Component, OnInit} from '@angular/core';
import {RoleService} from "../../../../services/role.service";
import {Role} from "../../../../models/role";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-role-dashboard',
  templateUrl: './update-role-dashboard.component.html',
  styleUrls: ['./update-role-dashboard.component.css']
})
export class UpdateRoleDashboardComponent implements OnInit{
	id: number = 0;
	name: string = "";
	description: string = "";

	constructor(private service: RoleService, private router: Router, private route: ActivatedRoute) {}

	ngOnInit(): void {
		// @ts-ignore
		this.id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
		this.service.getRoleById(this.id).subscribe({
			next: data => {
				this.name = data.name;
				this.description = data.description;
			},
			error: err => console.error(err)
		})
	}

	onSubmit(form: any): void {
		const role: Role = {
			id: this.id,
			name: this.name,
			description: this.description
		}
		this.service.updateRole(role).subscribe({
			next: () => this.router.navigate(["/dashboard/roles"]),
			error: err => console.log(err)
		});
	}
}
