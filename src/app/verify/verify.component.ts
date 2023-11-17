import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent {

  mail: any


  constructor(private http: HttpService, private route: ActivatedRoute) {

  }

  public verificar(codigo: String) {
    var body = {

      otp: codigo
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.mail = params["mail"]

      var body = {
        clave: this.mail
      }

      return this.http.verify(body).subscribe({
        next: (data: any) => {
          console.log(data)
        },
        error: (error: any) => {
          console.log(error)
        }
      })

    })
  }

}
