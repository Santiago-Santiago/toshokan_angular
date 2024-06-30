import { Usuario } from './../model/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { EmpleadoService } from '../service/empleado.service';
import { Empleado } from '../model/empleado';

@Component({
  selector: 'app-login-inicio',
  templateUrl: './login-inicio.component.html',
  styleUrl: './login-inicio.component.css',
})
export class LoginInicioComponent {
  loginForm: FormGroup;
  loginEstate: string = '';
  primeraLetra: string = '';
  userList: Usuario[] = [];
  empList: Empleado[] = [];

  user: Usuario = {
    id: '',
    nombre: '',
    apellido: '',
    celular: '',
    email: '',
    username: '',
    password: '',
  };

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
      nombre: ''
    },
    password: ''
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsuarioService,
    private empleadoService: EmpleadoService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  imprimirUsuario(user: Usuario) {
    console.log(user.id);
    console.log(user.nombre);
    console.log(user.apellido);
    console.log(user.celular);
    console.log(user.email);
    console.log(user.username);
    console.log(user.password);
  }

  OnInit() {
    sessionStorage.clear();
    console.log('se borro todooo');
  }

  userLogin() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;

      this.primeraLetra = username[0];
      console.log('La primera letra es: ' + this.primeraLetra);
      if (this.primeraLetra == 'E') {
        console.log('Por aqui paso');
        this.empleadoService
          .validarIngreso(username, password)
          .subscribe((response) => {
            this.empList = response;

            if (this.empList.length > 0) {
              this.emp = this.empList[0];
              sessionStorage.setItem('LoggedId', 'True');
              sessionStorage.setItem('userLoggedInId', this.emp.id);
              //this.imprimirUsuario(this.user);
              this.empList = [];
              const navigationExtras: NavigationExtras = {
                skipLocationChange: true,
                replaceUrl: true,
              };
              this.router.navigate(['/mantenimiento'], navigationExtras);
            } else {
              this.empList = [];
              this.loginEstate = 'Credenciales de acceso no validas';
            }
          });
      } else {
        this.userService
          .validarIngreso(username, password)
          .subscribe((response) => {
            this.userList = response;

            if (this.userList.length > 0) {
              this.user = this.userList[0];
              sessionStorage.setItem('LoggedId', 'True');
              sessionStorage.setItem('userLoggedInId', this.user.id);
              //this.imprimirUsuario(this.user);
              this.userList = [];
              const navigationExtras: NavigationExtras = {
                skipLocationChange: true,
                replaceUrl: true,
              };
              this.router.navigate(['/inicio'], navigationExtras);
            } else {
              this.userList = [];
              this.loginEstate = 'Credenciales de acceso no validas';
            }
          });
      }
    } else {
      this.loginEstate = 'Por favor complete el formulario correctamente.';
    }
  }
}
