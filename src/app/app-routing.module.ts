import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonsComponent } from './pokemons/pokemons.component';


const routes: Routes = [
	{
		path:'',
		redirectTo:'dashboard',
		pathMatch:'full',
	},
	{
		path:'dashboard',
		component:DashboardComponent,
		data: {
			title: "Dashboard"
		},
	},
	{
		path:'pokemons',
		component:PokemonsComponent,
		data: {
			title: "Pokemons list"
		},
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
