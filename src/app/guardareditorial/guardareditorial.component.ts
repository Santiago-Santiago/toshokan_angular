import { Component, NgZone } from '@angular/core';
import { Editorial } from '../model/editorial';
import { EditorialService } from '../service/editorial.service';
import { EmpleadoService } from '../service/empleado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-guardareditorial',
  templateUrl: './guardareditorial.component.html',
  styleUrl: './guardareditorial.component.css',
})
export class GuardareditorialComponent {
  editorialList: Editorial[] = [];
  usuarioID: string = '';

  editorial: Editorial = {
    id: '',
    nombre: ''
  };

  constructor(
    private editorialService: EditorialService,
    private empleadoService: EmpleadoService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    //this.usuarioID = sessionStorage.getItem('userLoggedInId')!;
    this.editorialService.listar().subscribe((data) => {
      this.editorialList = data;
    });

    this.obtenerEditorial();
  }

  obtenerEditorial() {
    //captura el parametro enviado
    const id = this.route.snapshot.params['idEdit'];

    //llama al servicio para invocar al metodo buscar
    this.editorialService.buscar(id).subscribe(
      (response) => {
        this.editorial = response;
      },
      (error) => {
        console.error('Error al obtener la editorial: ' + error);
      }
    );
  }

  registrarEditorial(): void {
    this.editorialService.registrar(this.editorial).subscribe(
      (data) => {
        if (data) {
          this.toastr.success('Registro Exitoso!', 'Confirmacion!');
          setTimeout(() => {
            this.router.navigate(['/liseditorial']);
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
