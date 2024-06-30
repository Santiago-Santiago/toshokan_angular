import { Component, NgZone } from '@angular/core';
import { Autor } from '../model/autor';
import { AutorService } from '../service/autor.service';
import { EmpleadoService } from '../service/empleado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-guardarautor',
  templateUrl: './guardarautor.component.html',
  styleUrl: './guardarautor.component.css',
})
export class GuardarautorComponent {
  autorList: Autor[] = [];
  usuarioID: string = '';

  autor: Autor = {
    id: '',
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    fechaMuerte: '',
    nacionalidad: ''
  };

  constructor(
    private autorService: AutorService,
    private empleadoService: EmpleadoService,
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

    this.obtenerAutor();
  }

  obtenerAutor() {
    //captura el parametro enviado
    const id = this.route.snapshot.params['idAut'];

    //llama al servicio para invocar al metodo buscar
    this.autorService.buscar(id).subscribe(
      (response) => {
        this.autor = response;
      },
      (error) => {
        console.error('Error al obtener la categoria: ' + error);
      }
    );
  }

  registrarAutor(): void {
    this.autorService.registrar(this.autor).subscribe(
      (data) => {
        if (data) {
          this.toastr.success('Registro Exitoso!', 'Confirmacion!');
          setTimeout(() => {
            this.router.navigate(['/lisautor']);
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
