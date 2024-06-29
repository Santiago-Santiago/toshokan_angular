import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoAlquilerService } from '../service/carrito-alquiler.service';
import { ToastrService } from 'ngx-toastr';
import { BoletaAlquiler } from '../model/boleta-alquiler';
import { BoletaAlquilerService } from '../service/boleta-alquiler.service';

@Component({
  selector: 'app-libros-alquilados',
  templateUrl: './libros-alquilados.component.html',
  styleUrl: './libros-alquilados.component.css',
})
export class LibrosAlquiladosComponent {
  boletaAlquilerList: BoletaAlquiler[] = [];
  usuarioID: string = '';

  constructor(
    private rentBolService: BoletaAlquilerService,
    private router: Router,
    private toastr: ToastrService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.usuarioID = sessionStorage.getItem('userLoggedInId')!;
    this.rentBolService
      .buscarRentasActivas(this.usuarioID)
      .subscribe((data) => {
        this.boletaAlquilerList = data;
      });
  }
}
