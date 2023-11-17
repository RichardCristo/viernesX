import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PartidosService {
  url ="http://localhost:6969";

  constructor(private http: HttpClient) { }

  getPartidos(){
    let headers= new HttpHeaders({
      'Content-type':'application/json',
      'Access-Control-Allow-Origin':'http://localhost:4200',
    })

    
    return this.http.get(this.url+"/partidos",{headers});
  }
}
