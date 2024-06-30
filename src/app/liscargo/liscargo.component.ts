import { Component, NgZone } from '@angular/core';
import { Cargo } from '../model/cargo';
import { CargoService } from '../service/cargo.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-liscargo',
  templateUrl: './liscargo.component.html',
  styleUrl: './liscargo.component.css',
})
export class LiscargoComponent {
  cargoList: Cargo[] = [];
  usuarioID: string = '';

  constructor(
    private cargoService: CargoService,
    private router: Router,
    private toastr: ToastrService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    //this.usuarioID = sessionStorage.getItem('userLoggedInId')!;
    this.cargoService.listar().subscribe((data) => {
      this.cargoList = data;
    });
  }

  editarCargo(idCar: string) {
    this.router.navigate(['/guardarcargo', idCar]);
  }

  eliminarCargo(id: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar este registro?')) {
      this.cargoService.eliminar(id).subscribe(
        () => {
          this.cargoList = this.cargoList.filter(
            (car) => car.id !== id
          );
          this.toastr.success(
            'Registro eliminado correctamente',
            'Confirmacion!'
          );
        },
        (error) => {
          console.error('Error al eliminar el registro', error);
          this.toastr.error('Error al eliminar el registro');
        }
      );
    }
  }
}
