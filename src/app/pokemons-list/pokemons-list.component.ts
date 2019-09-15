import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons-service/pokemons.service';
import { Pokemon } from '../models/pokemon-details';
import { PokemonPreview } from '../models/pokemon-preview';

@Component({
	selector: 'app-pokemons-list',
	templateUrl: './pokemons-list.component.html',
	styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit {
	pokemons:PokemonPreview[];	
	
	constructor(private pokemonService:PokemonsService) { }
	
	ngOnInit() {
		this.pokemonService.GetAll().subscribe((pokemons) => {
			this.pokemons = pokemons;
		})
	}
	
}
