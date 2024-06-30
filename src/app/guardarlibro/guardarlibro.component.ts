import { LibrosService } from './../service/libro.service';
import { Component, NgZone } from '@angular/core';
import { Libro } from '../model/libro';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Autor } from '../model/autor';
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../service/categoria.service';
import { AutorService } from '../service/autor.service';
import { Editorial } from '../model/editorial';
import { EditorialService } from '../service/editorial.service';

@Component({
  selector: 'app-guardarlibro',
  templateUrl: './guardarlibro.component.html',
  styleUrl: './guardarlibro.component.css',
})
export class GuardarlibroComponent {
  libroList: Libro[] = [];
  autorList: Autor[] = [];
  categoriaList: Categoria[] = [];
  editorialList: Editorial[] = [];

  usuarioID: string = '';

  libro: Libro = {
    id: '',
    titulo: '',
    descripcion: '',
    objAutor: {
      id: '',
      nombre: '',
      apellido: '',
      fechaNacimiento: '',
      fechaMuerte: '',
      nacionalidad: '',
    },
    fechaPublicacion: '',
    objCategoria: {
      id: '',
      nombre: '',
    },
    objEditorial: {
      id: '',
      nombre: '',
    },
    paginas: 0,
    stockDisponible: 0,
    stockEnAlquiler: 0,
    precio: 0,
    estado: '',
    imgBlob: new ArrayBuffer(8),
    imgPath: '',
    img64: '',
  };

  constructor(
    private libroService: LibrosService,
    private autorService: AutorService,
    private categoriaService: CategoriaService,
    private editorialService: EditorialService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    //this.usuarioID = sessionStorage.getItem('userLoggedInId')!;

    this.autorService.listar().subscribe((data) => {
      this.autorList = data;
    });

    this.categoriaService.listar().subscribe((data) => {
      this.categoriaList = data;
    });

    this.editorialService.listar().subscribe((data) => {
      this.editorialList = data;
    });

    this.obtenerLibro();
  }

  obtenerLibro() {
    //captura el parametro enviado
    const id = this.route.snapshot.params['idLib'];

    //llama al servicio para invocar al metodo buscar
    this.libroService.buscar(id).subscribe(
      (response) => {
        this.libro = response;
      },
      (error) => {
        console.error('Error al obtener el libro: ' + error);
      }
    );
  }

  registrarLibro(): void {
    this.libroService.registrar(this.libro).subscribe(
      (data) => {
        if (data) {
          this.toastr.success('Registro Exitoso!', 'Confirmacion!');
          setTimeout(() => {
            this.router.navigate(['/lislibro']);
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
