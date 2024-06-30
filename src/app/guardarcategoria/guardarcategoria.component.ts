import { Component, NgZone } from '@angular/core';
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../service/categoria.service';
import { EmpleadoService } from '../service/empleado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-guardarcategoria',
  templateUrl: './guardarcategoria.component.html',
  styleUrl: './guardarcategoria.component.css',
})
export class GuardarcategoriaComponent {
  categoriaList: Categoria[] = [];
  usuarioID: string = '';

  categoria: Categoria = {
    id: '',
    nombre: '',
  };

  constructor(
    private categoriaService: CategoriaService,
    private empleadoService: EmpleadoService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    //this.usuarioID = sessionStorage.getItem('userLoggedInId')!;
    this.categoriaService.listar().subscribe((data) => {
      this.categoriaList = data;
    });

    this.obtenerCategoria();
  }

  obtenerCategoria() {
    //captura el parametro enviado
    const id = this.route.snapshot.params['idCate'];

    console.log('obteniendo las categorias por ID ' + id);

    //llama al servicio para invocar al metodo buscar
    this.categoriaService.buscar(id).subscribe(
      (response) => {
        this.categoria = response;
        console.log(this.categoria.id+" La categoria ESSSSSSSSSSSSS guardarcategoria");
      },
      (error) => {
        console.error('Error al obtener la categoria: ' + error);
      }
    );
  }

  registrarCategoria(): void {
    console.log(
      this.categoria.nombre + ' El nombre de la categoria ESSSSSSSSSSSSS guardarcategoria'
    );
    this.categoriaService.registrar(this.categoria).subscribe(
      (data) => {
        if (data) {
          this.toastr.success('Registro Exitoso!', 'Confirmacion!');
          setTimeout(() => {
            this.router.navigate(['/liscategoria']);
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
