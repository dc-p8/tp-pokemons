import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons-service/pokemons.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedPokemons:number[];

  constructor(private pokemonsService:PokemonsService) { }

  ngOnInit() {
    this.pokemonsService.selectedPokemons$.subscribe((selectedPokemons) => {
      this.selectedPokemons = selectedPokemons;
    })
  }

}
