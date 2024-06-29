import { Usuario } from './../model/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { LibrosService } from '../service/libro.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  searchForm: FormGroup;
  userNom: string = 'Nombre';
  userApell: string = 'Apellido';
  type: string = 'user'; // this should be set based on actual user data

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
    private userService: UsuarioService,
    private librosService: LibrosService
  ) {
    this.searchForm = this.fb.group({
      txtBusqueda: [''],
    });
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('LoggedId') == 'True') {
      this.userService
        .buscar(sessionStorage.getItem('userLoggedInId')!)
        .subscribe((response) => {
          this.user = response;
          this.userNom = this.user.nombre;
          this.userApell = this.user.apellido;
        });
    } else {
      this.type = 'user';
      this.userNom = '';
      this.userApell = '';
      this.router.navigate(['/login']);
    }
  }

  onSubmit(): void {
    const consulta = this.searchForm.get('txtBusqueda')?.value;
    console.log('la consulta es: ' + consulta);
    this.router.navigate(['/libros/searchbar', consulta]);
  }
  show(): void {
    document.getElementById('user-button-information')!.style.display = 'block';
  }

  hide(): void {
    document.getElementById('user-button-information')!.style.display = 'none';
  }

  showHide(): void {
    const container = document.getElementById('user-button-information')!;
    if (container.style.display === 'none') {
      this.show();
    } else {
      this.hide();
    }
  }
}
