import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIServiceService {

  constructor(private http: HttpClient) { 

  }

  getPokemon(id: number): Observable<Pokemon> {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    return this.http.get<Pokemon>(url);
  }
}
