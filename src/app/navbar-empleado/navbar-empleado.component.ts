import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../service/empleado.service';
import { Empleado } from '../model/empleado';

@Component({
  selector: 'app-navbar-empleado',
  templateUrl: './navbar-empleado.component.html',
  styleUrl: './navbar-empleado.component.css',
})
export class NavbarEmpleadoComponent implements OnInit {
  userNom: string = '';
  userApell: string = '';
  type: string = 'user';

  emp: Empleado = {
    id: '',
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    dni: '',
    fechaContrato: '',
    celular: '',
    email: '',
    objCargo: {
      id: '',
      nombre: '',
    },
    password: '',
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private empService: EmpleadoService
  ) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('LoggedId') == 'True') {
      this.empService
        .buscar(sessionStorage.getItem('userLoggedInId')!)
        .subscribe((response) => {
          this.emp = response;
          this.userNom = this.emp.nombre;
          this.userApell = this.emp.apellido;
        });
    } else {
      this.type = 'user';
      this.userNom = '';
      this.userApell = '';
      this.router.navigate(['/login']);
    }
  }
}
