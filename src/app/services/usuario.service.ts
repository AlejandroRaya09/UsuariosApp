import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'https://gorest.co.in/public/v2/users'
  token = '1fb3f2673ab7a0ed6f59df5b53fc18fcfd837daacd9b04d19002eda156de5089'
  constructor(private http:HttpClient) { }


  getUsuarios(): Observable<any>{
    return this.http.get<any>(`${this.url}?access-token=${this.token}`)
    }


  getUser(id:number): Observable<any>{
    return this.http.get<any>(`${this.url}/${id}}?access-token=${this.token}` )
  }
}
