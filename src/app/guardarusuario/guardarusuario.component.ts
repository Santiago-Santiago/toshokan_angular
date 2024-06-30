import { Component, NgZone } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-guardarusuario',
  templateUrl: './guardarusuario.component.html',
  styleUrl: './guardarusuario.component.css',
})
export class GuardarusuarioComponent {
  usuarioList: Usuario[] = [];
  usuarioID: string = '';

  usuario: Usuario = {
    id: '',
    nombre: '',
    apellido: '',
    celular: '',
    email: '',
    username: '',
    password: '',
  };

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    //this.usuarioID = sessionStorage.getItem('userLoggedInId')!;
    this.usuarioService.listar().subscribe((data) => {
      this.usuarioList = data;
    });

    this.obtenerUsuario();
  }

  obtenerUsuario() {
    //captura el parametro enviado
    const id = this.route.snapshot.params['idUser'];

    //llama al servicio para invocar al metodo buscar
    this.usuarioService.buscar(id).subscribe(
      (response) => {
        this.usuario = response;
      },
      (error) => {
        console.error('Error al obtener el Usuario: ' + error);
      }
    );
  }

  registrarUsuario(): void {
    this.usuarioService.registrar(this.usuario).subscribe(
      (data) => {
        if (data) {
          this.toastr.success('Registro Exitoso!', 'Confirmacion!');
          setTimeout(() => {
            this.router.navigate(['/lisusuario']);
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
