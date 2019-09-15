import {
	Component, OnInit
} from '@angular/core';
import {
	BreakpointObserver
} from '@angular/cdk/layout';
import { DynamicTitleService } from './dynamic-title.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
	isMobile:boolean = true;
	items = [
		{
			title:'Dashboard',
			route:'dashboard',
			icon:'dashboard'
		},
		{
			title:'Pokemons',
			route:'pokemons',
			icon:'list'
		}
	];

	ngOnInit(){
		this.bpo.observe('(max-width: 600px)').subscribe((state) => {
			this.isMobile = state.matches;
		});
	}

	constructor(
		private bpo: BreakpointObserver,
		public dynamicTitleService:DynamicTitleService) {
	}
}
