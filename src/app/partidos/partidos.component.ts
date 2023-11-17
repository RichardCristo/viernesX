import { Component } from '@angular/core';
import { PartidosService } from '../partidos.service';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})

export class PartidosComponent {
  verTabla: boolean= false;
  partidosLista!: Array<{
    _id: number,
    local: string,
    visitante: string,
    gol_local: number,
    gol_visitante: number,
    fecha: string,
  }>
  mostrarCard: boolean = false;
  equipoLocal: string = '';
  equipoVisitante: string = '';
  montoApuesta: number | undefined;
  idPartido: number | undefined;
  monto: number | undefined;
  tipoApuesta: string = '';
  multiplicador : number | undefined;

  constructor(private a: PartidosService) { }

  ngOnInit(){
    this.a.getPartidos().subscribe({
      next: (data: any) => {
        console.log(data);
        this.partidosLista = JSON.parse(JSON.stringify(data))
        this.verTabla = true;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  mostrarTarjetaApuesta(equipoLocal: string, equipoVisitante: string) {

    this.mostrarCard = true;
    this.equipoLocal = equipoLocal;
    this.equipoVisitante = equipoVisitante;
    this.montoApuesta = undefined; 
  }

  apostar(){
   
  }

}
