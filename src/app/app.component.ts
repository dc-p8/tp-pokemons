import {
	Component, OnInit
} from '@angular/core';
import {
	BreakpointObserver
} from '@angular/cdk/layout';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
	items = [...Array(100).keys()].map((item => `item ${item}`));
	isMobile:boolean = true;
	ngOnInit(){
		this.bpo.observe('(max-width: 600px)').subscribe((state) => {
			this.isMobile = state.matches
		})
	}
	constructor(
		private bpo: BreakpointObserver) {
		
	}
}
