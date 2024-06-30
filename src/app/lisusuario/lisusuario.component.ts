import { Component, NgZone } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lisusuario',
  templateUrl: './lisusuario.component.html',
  styleUrl: './lisusuario.component.css',
})
export class LisusuarioComponent {
  usuarioList: Usuario[] = [];
  usuarioID: string = '';

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private toastr: ToastrService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    //this.usuarioID = sessionStorage.getItem('userLoggedInId')!;
    this.usuarioService.listar().subscribe((data) => {
      this.usuarioList = data;
    });
  }

  editarUsuario(idUser: string) {
    this.router.navigate(['/guardarusuario', idUser]);
  }

  eliminarUsuario(id: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar este registro?')) {
      this.usuarioService.eliminar(id).subscribe(
        () => {
          this.usuarioList = this.usuarioList.filter((user) => user.id !== id);
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
