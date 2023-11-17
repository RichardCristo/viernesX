  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url= "http://172.16.255.233:3000/";

  constructor(private http: HttpClient) { }

  registrarse(body: any) {
    return this.http.post(this.url + "usuarios/registro", body);
  }

  login(body: any) {
    return this.http.post(this.url + "usuarios/inicioSesion", body);
  }

  verify(body: any){
    return this.http.post(this.url + "usuarios/verify", body);
  }

  apostar(body: any){
    return this.http.post(this.url + "usuarios/apostar", body);
  }

}
