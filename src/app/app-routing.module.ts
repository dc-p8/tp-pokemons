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
	},
	{
		path:'pokemons',
		component:PokemonsComponent,
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
