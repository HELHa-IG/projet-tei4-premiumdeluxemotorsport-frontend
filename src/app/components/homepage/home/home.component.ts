import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	items: MenuItem[] | undefined;

	activeItem: MenuItem | undefined;

	constructor(private router: Router) {}
	ngOnInit() {
		this.items = [
			{label: 'Véhicules', routerLink: ['/vehicle']},
			{label: 'Essai'},
			{label: 'Nouveautés'},
			{label: 'Contact'},
		];

		this.activeItem = this.items[0];
	}
}
