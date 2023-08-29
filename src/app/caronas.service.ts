import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ICarona } from './Carona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaronasService {

  constructor(private http: HttpClient) { }

  private apiUrl = "http://localhost:3000/caronas";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAll():Observable<ICarona[]> {
    return this.http.get<ICarona[]>(this.apiUrl);
  }
}
