import { PokemonStat } from './PokemonStat';

export class Pokemon{
    id:number;
    name:string;
    type:Array<string>;
    stats:PokemonStat;
    image:string;
}