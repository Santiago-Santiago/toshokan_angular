import { Component, NgZone } from '@angular/core';
import { Autor } from '../model/autor';
import { AutorService } from '../service/autor.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lisautor',
  templateUrl: './lisautor.component.html',
  styleUrl: './lisautor.component.css',
})
export class LisautorComponent {
  autorList: Autor[] = [];
  usuarioID: string = '';

  constructor(
    private autorService: AutorService,
    private router: Router,
    private toastr: ToastrService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    //this.usuarioID = sessionStorage.getItem('userLoggedInId')!;
    this.autorService.listar().subscribe((data) => {
      this.autorList = data;
    });
  }

  editarAutor(idAut: string) {
    this.router.navigate(['/guardarautor', idAut]);
  }

  eliminarAutor(id: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar este registro?')) {
      this.autorService.eliminar(id).subscribe(
        () => {
          this.autorList = this.autorList.filter((aut) => aut.id !== id);
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
