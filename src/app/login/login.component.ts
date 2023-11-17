import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
mail!: string;
contrasena!: string;
constructor(private http: HttpService, private router: Router) {}
logear() {
      var body = {
        mail: this.mail,
        contraseña: this.contrasena
      }
      this.http.login(body).subscribe({
        next: (data: any) => {
          console.log(data);
          this.router.navigate(["/partidos"]);
        },
        error: (error: any) => {

          console.log(error);
        }
      })
    }
}