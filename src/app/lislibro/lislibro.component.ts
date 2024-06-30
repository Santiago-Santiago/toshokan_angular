import { LibrosService } from './../service/libro.service';
import { Component, NgZone } from '@angular/core';
import { Libro } from '../model/libro';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lislibro',
  templateUrl: './lislibro.component.html',
  styleUrl: './lislibro.component.css',
})
export class LislibroComponent {
  libroList: Libro[] = [];
  usuarioID: string = '';

  constructor(
    private libroService: LibrosService,
    private router: Router,
    private toastr: ToastrService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    //this.usuarioID = sessionStorage.getItem('userLoggedInId')!;
    this.libroService.listar().subscribe((data) => {
      this.libroList = data;
    });
  }

  editarLibro(idLib: string) {
    this.router.navigate(['/guardarlibro', idLib]);
  }

  eliminarLibro(id: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar este registro?')) {
      this.libroService.eliminar(id).subscribe(
        () => {
          this.libroList = this.libroList.filter((lib) => lib.id !== id);
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
