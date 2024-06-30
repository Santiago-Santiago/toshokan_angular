import { Component, NgZone } from '@angular/core';
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../service/categoria.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-liscategoria',
  templateUrl: './liscategoria.component.html',
  styleUrl: './liscategoria.component.css',
})
export class LiscategoriaComponent {
  categoriaList: Categoria[] = [];
  usuarioID: string = '';

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private toastr: ToastrService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    //this.usuarioID = sessionStorage.getItem('userLoggedInId')!;
    this.categoriaService.listar().subscribe((data) => {
      this.categoriaList = data;
    });
  }

  editarCategoria(idCate: string) {
    this.router.navigate(['/guardarcategoria', idCate]);
  }

  eliminarCategoria(id: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar este registro?')) {
      this.categoriaService.eliminar(id).subscribe(
        () => {
          this.categoriaList = this.categoriaList.filter(
            (cat) => cat.id !== id
          );
          this.toastr.success(
            'Registro eliminado correctamente',
            'Confirmacion!'
          );
        },
        (error) => {
          console.error('Error al eliminar el registro', error);
          this.toastr.error('Error al eliminar el artículo');
        }
      );
    }
  }
}
