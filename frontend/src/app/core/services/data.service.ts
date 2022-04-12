import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<any> {
    return this.http.get<any>(`${environment.api}/pokemon?limit=10`);
  }
}
