import { Component, NgZone } from '@angular/core';
import { CargoService } from '../service/cargo.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Editorial } from '../model/editorial';
import { EditorialService } from '../service/editorial.service';

@Component({
  selector: 'app-liseditorial',
  templateUrl: './liseditorial.component.html',
  styleUrl: './liseditorial.component.css',
})
export class LiseditorialComponent {
  editorialList: Editorial[] = [];
  usuarioID: string = '';

  constructor(
    private editorialService: EditorialService,
    private router: Router,
    private toastr: ToastrService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    //this.usuarioID = sessionStorage.getItem('userLoggedInId')!;
    this.editorialService.listar().subscribe((data) => {
      this.editorialList = data;
    });
  }

  editarEditorial(idEdit: string) {
    this.router.navigate(['/guardareditorial', idEdit]);
  }

  eliminarEditorial(id: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar este registro?')) {
      this.editorialService.eliminar(id).subscribe(
        () => {
          this.editorialList = this.editorialList.filter(
            (edit) => edit.id !== id
          );
          this.toastr.success(
            'Registro eliminado correctamente',
            'Confirmacion!'
          );
        },
        (error) => {
          console.error(
            'Error al eliminar el registro',
            error
          );
          this.toastr.error('Error al eliminar el artículo');
        }
      );
    }
  }
}
