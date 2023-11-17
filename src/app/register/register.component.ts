import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  constructor(private http: HttpService, private router: Router) {
    this.mensaje = ""
  }

  mensaje: string;

  ngOnInit(): void {

  }

  toBase64 = (file: any) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  })

  async verString64() {
    //@ts-ignore
    const file = document.getElementById("foto")?.files[0]
    console.log(await this.toBase64(file));
  }

  public registro(nombre: string, contraseña: string, mail: string, DNI: string, fechaNac: string, apellido: string) {
    //@ts-ignore
    const file = document.getElementById("foto")?.files[0]
    this.toBase64(file).then((v) => {
      var body = {
        nombre: nombre,
        contraseña: contraseña,
        mail: mail,
        DNI: DNI,
        fechaNac: fechaNac,
        apellido: apellido,
        fotoDoc: v  
      }

      this.http.registrarse(body).subscribe({
        next: (data: any) => {
          console.log(data);
          this.mensaje = ""
          this.router.navigate(["/partidos"]);

        },
        error: (error: any) => {
          console.log(error);
          this.mensaje = JSON.parse(JSON.stringify(error)).error
          //this.error = "Correo ya registrado"
        }

      })
    })
  }
}
