import { Component, NgZone, OnInit } from '@angular/core';
import { CarritoAlquilerService } from './../service/carrito-alquiler.service';
import { CarritoAlquiler } from '../model/carrito-alquiler';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-carrito-alquiler',
  templateUrl: './carrito-alquiler.component.html',
  styleUrl: './carrito-alquiler.component.css',
})
export class CarritoAlquilerComponent implements OnInit {
  rentCarList: CarritoAlquiler[] = [];
  quantityList: number[] = [];
  usuarioID: string = '';

  constructor(
    private rentCarService: CarritoAlquilerService,
    private router: Router,
    private toastr: ToastrService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.usuarioID = sessionStorage.getItem('userLoggedInId')!;
    this.rentCarService.listarDatosEsp(this.usuarioID).subscribe((data) => {
      this.rentCarList = data;
    });
  }

  downloadReport(codigoBoleta: string): void {
    this.rentCarService.downloadPDF(codigoBoleta);
  }

  updateQuantity(index: number, value: number): void {
    this.quantityList[index] = value;
  }

  recargarComponente() {
    this.ngZone.runOutsideAngular(() => {
      location.reload();
    });
  }

  eliminarDelCarrito(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este artículo?')) {
      this.rentCarService.eliminar(id).subscribe(
        () => {
          this.rentCarList = this.rentCarList.filter(
            (rentCar) => rentCar.id !== id
          );
          this.toastr.success(
            'Artículo eliminado correctamente',
            'Confirmacion!'
          );
        },
        (error) => {
          console.error(
            'Error al eliminar el artículo del carrito de alquiler',
            error
          );
          this.toastr.error('Error al eliminar el artículo');
        }
      );
    }
  }

  pagarCarritoAlquiler(): void {
    if (
      confirm(
        'Se procedera con la trasaccion ¿Estás seguro de que deseas continuar?'
      )
    ) {
      this.rentCarService
        .pagarCarritoAlquiler(this.usuarioID, this.quantityList)
        .subscribe(
          (data: string) => {
            console.log('esta es la data' + data); // Este es el codigo de la boleta generada por el backend para el pago
            if (data) {
              this.toastr.success(
                'Transaccion Exitosa, sus articulos seran enviados a la brevedad!',
                'Confirmacion!'
              );
              setTimeout(() => {
                this.downloadReport(data);
              }, 1000);
              setTimeout(() => {
                this.recargarComponente();
              }, 3500);
            } else {
              this.toastr.error('Error en la transaccion - Data No Null');
            }
          },
          (error) => {
            console.error('Error al completar la transaccion', error);
            this.toastr.error('Error en la transaccion');
          }
        );
    }
  }
}
