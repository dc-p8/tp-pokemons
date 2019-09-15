import { Injectable } from '@angular/core';

import { map, filter, mergeMap } from 'rxjs/operators';

import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

const APP_TITLE = 'PokeApp';
const SEPARATOR = ' > ';

@Injectable({
	providedIn: 'root'
})
export class DynamicTitleService {
	title:BehaviorSubject<string> = new BehaviorSubject('');
	public $title = this.title.asObservable();

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private titleService: Title){
		this.router.events.pipe(
			filter((event) => event instanceof NavigationEnd),
			map(() => {
				let route = this.activatedRoute;
				while (route.firstChild) route = route.firstChild;
				return route;
			}),
			filter((route) => route.outlet === 'primary'),
			mergeMap((route) => route.data),
			map((data) => {
				if ( data.title ) {
					return data.title;
				}
			}),
		)
		.subscribe((pathString) => {
			this.title.next(pathString)
		});

		this.title.subscribe((newTitle) => {
			this.titleService.setTitle(`${APP_TITLE} - ${newTitle}`);
		})
	}
}