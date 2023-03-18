import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalisisService {

  constructor(private http: HttpClient) {}

  getResultado(texto:string): Observable<any>{
    console.log('enviando peticion')
    const URL = 'http://localhost:5000/sentimientos/'+texto
    //console.log('acediendo a la web')
    return this.http.get(URL)
  }
}
