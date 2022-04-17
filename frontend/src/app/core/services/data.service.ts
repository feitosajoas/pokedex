import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAllPokemons(limit: number, offset: number): Observable<any> {
    return this.http.get<any>(`${environment.api}/pokemon?limit=${limit}&offset=${offset}`);
  }

  getDetail(name: string): Observable<any> {
    return this.http.get(`${environment.api}/pokemon/${name}`);
  }
}
