import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from '../model/usuario';
import { LibrosService } from '../service/libro.service';
import { Libro } from '../model/libro';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio-home',
  templateUrl: './inicio-home.component.html',
  styleUrls: ['./inicio-home.component.css'],
})
export class InicioHomeComponent implements OnInit {
  imagenBase64: SafeUrl = '';
  libroList: Libro[] = [];
  searchForm: FormGroup;
  userNom: string = 'Nombre';
  userApell: string = 'Apellido';
  type: string = 'user'; // this should be set based on actual user data
  numberRandomList1: number[] = [];
  numberRandomList2: number[] = []; // Replace with actual data
  conversionCompleta = false;

  constructor(
    private fb: FormBuilder,
    private libroService: LibrosService,
    public sanitizer: DomSanitizer
  ) {
    this.searchForm = this.fb.group({
      txtBusqueda: [''],
    });
  }

  ngOnInit(): void {
    this.libroService.listar().subscribe((data) => {
      this.libroList = data;

      for (let i = 0; i < 10; i++) {
        this.numberRandomList1.push(
          this.getRandomNumber(1, this.libroList.length)
        );
        this.numberRandomList2.push(
          this.getRandomNumber(1, this.libroList.length)
        );
      }
    });
  }

  user: Usuario = {
    id: '',
    nombre: '',
    apellido: '',
    celular: '',
    email: '',
    username: '',
    password: '',
  };

  mostrar1registro(): void {
    console.log('---------------------------------');
    console.log('---------------------------------');
    console.log('El tama;o de la lista de libro es ' + this.libroList.length);
    console.log(this.libroList[0].titulo);
    //console.log(this.libroList[0].descripcion);
    //console.log(this.libroList[0].stockDisponible);
    //console.log(this.libroList[0].stockEnAlquiler);
    //console.log(this.libroList[0].precio);
    //console.log(this.libroList[0].fechaPublicacion);
    //console.log('Esto es Blob ' + this.libroList[0].imgBlob);
    console.log(
      'Esto es img64 ' +
        this.sanitizer.bypassSecurityTrustUrl(this.libroList[0].img64)
    );
    console.log('---------------------------------');
    console.log('---------------------------------');
  }

  onSubmit(): void {
    const searchValue = this.searchForm.value.txtBusqueda;
    // Handle search submission
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  move(value: number): void {
    this.mostrar1registro();
    const track = document.getElementById('track') as HTMLElement;
    const slick = document.querySelectorAll('.slick')[0] as HTMLElement;
    const slickWidth = slick.offsetWidth;
    let leftPosition =
      track.style.left === ''
        ? 0
        : parseFloat(track.style.left.slice(0, -2)) * -1;

    const trackWidth = track.offsetWidth;
    const listWidth = document.getElementById('slick-list')!.offsetWidth;

    if (leftPosition < trackWidth - listWidth && value === 2) {
      track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    } else if (leftPosition > 0 && value === 1) {
      track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
  }

  move2(value: number): void {
    const track = document.getElementById('track-2') as HTMLElement;
    const slick = document.querySelectorAll('.slick')[0] as HTMLElement;
    const slickWidth = slick.offsetWidth;
    let leftPosition =
      track.style.left === ''
        ? 0
        : parseFloat(track.style.left.slice(0, -2)) * -1;

    const trackWidth = track.offsetWidth;
    const listWidth = document.getElementById('slick-list-2')!.offsetWidth;

    if (leftPosition < trackWidth - listWidth && value === 2) {
      track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    } else if (leftPosition > 0 && value === 1) {
      track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
  }

  show(): void {
    document.getElementById('user-button-information')!.style.display = 'block';
  }

  hide(): void {
    document.getElementById('user-button-information')!.style.display = 'none';
  }

  showHide(): void {
    const container = document.getElementById('user-button-information')!;
    if (container.style.display === 'none') {
      this.show();
    } else {
      this.hide();
    }
  }
}
