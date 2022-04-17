import { PokemonList } from './../models/pokemon-list.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonDetail } from '../models/poemon-detail.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAllPokemons(limit: number, offset: number): Observable<PokemonList> {
    return this.http.get<PokemonList>(`${environment.api}/pokemon?limit=${limit}&offset=${offset}`);
  }

  getDetail(name: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(`${environment.api}/pokemon/${name}`);
  }
}
