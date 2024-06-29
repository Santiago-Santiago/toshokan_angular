import { Usuario } from './../model/usuario';
import { CarritoAlquiler } from './../model/carrito-alquiler';
import { CarritoComprasService } from './../service/carrito-compras.service';
import { CarritoAlquilerService } from './../service/carrito-alquiler.service';

import { Component, OnInit } from '@angular/core';
import { Libro } from '../model/libro';
import { LibrosService } from '../service/libro.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarritoCompras } from '../model/carrito-compras';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit {
  libroList: Libro[] = [];

  consulta: string = '';

  carListExist: CarritoAlquiler[] = [];

  carListExist2: CarritoCompras[] = [];

  rentCar: CarritoAlquiler = {
    id: 0,
    objLibro: {
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
      imgPath: '',
      img64: '',
      imgBlob: new ArrayBuffer(16),
    },
    objUsuario: {
      id: '',
      nombre: '',
      apellido: '',
      celular: '',
      email: '',
      username: '',
      password: '',
    },
    tituloLibro: '',
    stockDisponible: 0,
    precioLibro: 0,
  };

  buyCar: CarritoCompras = {
    id: 0,
    objLibro: {
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
      imgPath: '',
      img64: '',
      imgBlob: new ArrayBuffer(16),
    },
    objUsuario: {
      id: '',
      nombre: '',
      apellido: '',
      celular: '',
      email: '',
      username: '',
      password: '',
    },
    tituloLibro: '',
    stockDisponible: 0,
    precio: 0,
  };

  objUsuario: Usuario = {
    id: '',
    nombre: '',
    apellido: '',
    celular: '',
    email: '',
    username: '',
    password: '',
  };

  constructor(
    private carritoComprasService: CarritoComprasService,
    private carritoAlquilerService: CarritoAlquilerService,
    private libroService: LibrosService,
    public sanitizer: DomSanitizer,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.consulta = this.route.snapshot.params['consulta'];

    if (this.consulta != undefined) {
      this.libroService.buscarPorTitulo(this.consulta).subscribe((data) => {
        this.libroList = data;
      });
    } else {
      this.libroService.listar().subscribe((data) => {
        this.libroList = data;
      });
    }
  }

  addRentCar(lib: Libro) {
    let confirmacion = true;
    this.objUsuario.id = sessionStorage.getItem('userLoggedInId')!;
    this.rentCar.objUsuario = this.objUsuario;
    this.rentCar.objLibro = lib;
    this.rentCar.tituloLibro = lib.titulo;
    this.rentCar.stockDisponible = lib.stockDisponible;
    this.rentCar.precioLibro = lib.precio;

    this.carritoAlquilerService
      .buscarPorLibroYUsuario(lib.id, sessionStorage.getItem('userLoggedInId')!)
      .subscribe((data) => {
        this.carListExist = data;
        if (this.carListExist.length > 0) {
          this.toastr.warning(
            'El Articulo ya ha sido agregado',
            'ADVERTENCIA!'
          );
        } else {
          this.carritoAlquilerService.registrar(this.rentCar).subscribe(
            (response) => {
              console.log(
                'Añadido al carrito de alquiler con éxito:',
                response
              );

              // limpia el formulario

              this.rentCar = {
                id: 0,
                objLibro: {
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
                  imgPath: '',
                  img64: '',
                  imgBlob: new ArrayBuffer(16),
                },
                objUsuario: {
                  id: '',
                  nombre: '',
                  apellido: '',
                  celular: '',
                  email: '',
                  username: '',
                  password: '',
                },
                tituloLibro: '',
                stockDisponible: 0,
                precioLibro: 0,
              };

              this.objUsuario = {
                id: '',
                nombre: '',
                apellido: '',
                celular: '',
                email: '',
                username: '',
                password: '',
              };

              this.toastr.info(
                'Se a agregado el articulo al carrito para alquiler',
                'AGREGADO!'
              );
            },

            (error) => {
              console.error('Error al registrar el producto:', error);
            }
          );
        }
      });
  }

  addBuyCar(lib: Libro) {
    let confirmacion = true;
    this.objUsuario.id = sessionStorage.getItem('userLoggedInId')!;
    this.buyCar.objUsuario = this.objUsuario;
    this.buyCar.objLibro = lib;
    this.buyCar.tituloLibro = lib.titulo;
    this.buyCar.stockDisponible = lib.stockDisponible;
    this.buyCar.precio = lib.precio;

    this.carritoComprasService
      .buscarPorLibroYUsuario(lib.id, sessionStorage.getItem('userLoggedInId')!)
      .subscribe((data) => {
        this.carListExist2 = data;
        if (this.carListExist2.length > 0) {
          this.toastr.warning(
            'El Articulo ya ha sido agregado',
            'ADVERTENCIA!'
          );
        } else {
          this.carritoComprasService.registrar(this.buyCar).subscribe(
            (response) => {
              console.log('Añadido al carrito de compra con éxito:', response);

              // limpia el formulario

              this.buyCar = {
                id: 0,
                objLibro: {
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
                  imgPath: '',
                  img64: '',
                  imgBlob: new ArrayBuffer(16),
                },
                objUsuario: {
                  id: '',
                  nombre: '',
                  apellido: '',
                  celular: '',
                  email: '',
                  username: '',
                  password: '',
                },
                tituloLibro: '',
                stockDisponible: 0,
                precio: 0,
              };

              this.objUsuario = {
                id: '',
                nombre: '',
                apellido: '',
                celular: '',
                email: '',
                username: '',
                password: '',
              };

              this.toastr.info(
                'Se a agregado el articulo al carrito para compra',
                'AGREGADO!'
              );
            },

            (error) => {
              console.error('Error al registrar el producto:', error);
            }
          );
        }
      });
  }
}
