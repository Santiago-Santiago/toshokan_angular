import { Usuario } from './../model/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

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

  user: Usuario = {
    id: '',
    nombre: '',
    apellido: '',
    celular: '',
    email: '',
    username: '',
    password: '',
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsuarioService
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

  OnInit(){
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

      // Maneja la lógica de inicio de sesión aquí
      // Si el inicio de sesión falla, puedes configurar this.loginEstate para que muestre un mensaje de error
      //console.log('Username:', username);
      //console.log('Password:', password);
    } else {
      this.loginEstate = 'Por favor complete el formulario correctamente.';
    }
  }
}
