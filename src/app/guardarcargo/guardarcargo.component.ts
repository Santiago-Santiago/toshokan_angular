import { Component, NgZone } from '@angular/core';
import { Cargo } from '../model/cargo';
import { CargoService } from '../service/cargo.service';
import { EmpleadoService } from '../service/empleado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-guardarcargo',
  templateUrl: './guardarcargo.component.html',
  styleUrl: './guardarcargo.component.css',
})
export class GuardarcargoComponent {
  cargoList: Cargo[] = [];
  usuarioID: string = '';

  cargo: Cargo = {
    id: '',
    nombre: '',
  };

  constructor(
    private cargoService: CargoService,
    private empleadoService: EmpleadoService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    //this.usuarioID = sessionStorage.getItem('userLoggedInId')!;
    this.cargoService.listar().subscribe((data) => {
      this.cargoList = data;
    });

    this.obtenerCargo();
  }

  obtenerCargo() {
    //captura el parametro enviado
    const id = this.route.snapshot.params['idCar'];

    //llama al servicio para invocar al metodo buscar
    this.cargoService.buscar(id).subscribe(
      (response) => {
        this.cargo = response;
      },
      (error) => {
        console.error('Error al obtener la categoria: ' + error);
      }
    );
  }

  registrarCargo(): void {
    this.cargoService.registrar(this.cargo).subscribe(
      (data) => {
        if (data) {
          this.toastr.success('Registro Exitoso!', 'Confirmacion!');
          setTimeout(() => {
            this.router.navigate(['/liscargo']);
          }, 2000);
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
