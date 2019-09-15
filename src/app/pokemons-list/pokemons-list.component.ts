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
	selectedPokemons = {};
	pokemons:PokemonPreview[];	
	
	Select(selectedPokemon:PokemonPreview){
		this.pokemonService.togglePokemonSelected(selectedPokemon);
	}
	constructor(private pokemonService:PokemonsService) { }
	
	ngOnInit() {
		this.pokemonService.GetAll().subscribe((pokemons) => {
			this.pokemons = pokemons;
		})
		this.pokemonService.selectedPokemons$.subscribe((selectedPokemons) => {
			this.selectedPokemons = selectedPokemons.reduce((acc, current) => {
				acc[current] = true;
				return acc;
			}, {});
			console.log(this.selectedPokemons);
		})
	}
	
}
