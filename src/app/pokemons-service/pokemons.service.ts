import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon-details';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PokemonPreview } from '../models/pokemon-preview';

@Injectable({
	providedIn: 'root'
})
export class PokemonsService {
	cachedPokemons:PokemonPreview[] = null;
	GetAll():Observable<PokemonPreview[]>{
		if(this.cachedPokemons)
			return of(this.cachedPokemons);
		return (this.http.get('assets/pokedex.json') as Observable<any[]>)
		.pipe(
			map((pokemons) => {
				return pokemons.map((pokemonJson) => {
					let padId = `000${pokemonJson.id}`.slice(-3)
					let pokemon = {
						id: +pokemonJson.id,
						name : pokemonJson.name.english,
						thumbnail : `assets/thumbnails/${padId}.png`
					} as PokemonPreview;
					return pokemon;
				});
			}),
			tap((pokemons) => {
				this.cachedPokemons = pokemons;
			})
		)
	}
	constructor(private http:HttpClient) {

	}
}
