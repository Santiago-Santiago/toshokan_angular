import { Component, NgZone } from '@angular/core';
import { Empleado } from '../model/empleado';
import { EmpleadoService } from '../service/empleado.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lisempleado',
  templateUrl: './lisempleado.component.html',
  styleUrl: './lisempleado.component.css',
})
export class LisempleadoComponent {
  empList: Empleado[] = [];
  usuarioID: string = '';

  constructor(
    private empleadoService: EmpleadoService,
    private router: Router,
    private toastr: ToastrService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    //this.usuarioID = sessionStorage.getItem('userLoggedInId')!;
    this.empleadoService.listar().subscribe((data) => {
      this.empList = data;
    });
  }

  editarEmpleado(idEmp: string) {
    this.router.navigate(['/guardarempleado', idEmp]);
  }
}
