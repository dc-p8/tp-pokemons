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
	GetAll():Observable<PokemonPreview[]>{
		return (this.http.get('assets/pokedex.json') as Observable<any[]>)
		.pipe(
			tap(pokemons => {
				console.log(pokemons)
			}),
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
			})
		)
	}
	constructor(private http:HttpClient) {

	}
}
