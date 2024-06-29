import { Component, NgZone, OnInit } from '@angular/core';
import { CarritoComprasService } from './../service/carrito-compras.service';
import { CarritoCompras } from '../model/carrito-compras';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrl: './carrito-compras.component.css',
})
export class CarritoComprasComponent implements OnInit {
  buyCarList: CarritoCompras[] = [];
  quantityList: number[] = [];
  usuarioID: string = '';

  constructor(
    private carritoComprasService: CarritoComprasService,
    private router: Router,
    private toastr: ToastrService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.usuarioID = sessionStorage.getItem('userLoggedInId')!;
    this.carritoComprasService
      .listarDatosEsp(this.usuarioID)
      .subscribe((data) => {
        this.buyCarList = data;
      });
  }
  downloadReport(codigoBoleta: string): void {
    this.carritoComprasService.downloadPDF(codigoBoleta);
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
      this.carritoComprasService.eliminar(id).subscribe(
        () => {
          this.buyCarList = this.buyCarList.filter(
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

  pagarCarritoCompras(): void {
    if (
      confirm(
        'Se procedera con la trasaccion ¿Estás seguro de que deseas continuar?'
      )
    ) {
      this.carritoComprasService
        .pagarCarritoCompras(this.usuarioID, this.quantityList)
        .subscribe(
          (data: string) => {
            console.log('esta es la data' + data);
            if (data) {
              this.toastr.success(
                'Transaccion Exitosa, sus articulos seran enviados a la brevedad!',
                'Confirmacion!'
              );
              setTimeout(() => {
                this.downloadReport(data);
              }, 1000);
              setTimeout(() => {this.recargarComponente();}, 3500);
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
