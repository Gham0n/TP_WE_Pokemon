import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) { }

  getPokemon(id: number): Observable<Pokemon> {
    return this.getPokemonDetails(id).pipe(
      map((data: any) => {
        const pokemon = new Pokemon(
          data.id,
          data.name,
          data.weight,
          data.height,
          data.stats.find((stat: any) => stat.stat.name === 'attack').base_stat,
          data.stats.find((stat: any) => stat.stat.name === 'defense').base_stat,
          data.stats.find((stat: any) => stat.stat.name === 'speed').base_stat,
          data.stats.find((stat: any) => stat.stat.name === 'special-attack').base_stat,
          data.stats.find((stat: any) => stat.stat.name === 'special-defense').base_stat
        );
        return pokemon;
      })
    );
  }
  
  getPokemonDetails(id: number): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }
  
  

}
