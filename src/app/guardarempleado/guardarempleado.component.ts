import { Component, NgZone } from '@angular/core';
import { CargoService } from '../service/cargo.service';
import { EmpleadoService } from '../service/empleado.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from '../model/empleado';
import { Cargo } from '../model/cargo';

@Component({
  selector: 'app-guardarempleado',
  templateUrl: './guardarempleado.component.html',
  styleUrl: './guardarempleado.component.css',
})
export class GuardarempleadoComponent {
  empList: Empleado[] = [];
  cargoList: Cargo[] = [];
  usuarioID: string = '';

  empleado: Empleado = {
    id: '',
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    fechaContrato: '',
    dni: '',
    celular: '',
    email: '',
    objCargo: {
      id: '',
      nombre: '',
    },
    password: '',
  };

  constructor(
    private cargoService: CargoService,
    private empleadoService: EmpleadoService,
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

  registrarEmpleado(): void {
    this.empleadoService.registrar(this.empleado).subscribe(
      (data) => {
        if (data) {
          this.toastr.success('Registro Exitoso!', 'Confirmacion!');
          setTimeout(() => {
            this.router.navigate(['/lisempleado']);
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
