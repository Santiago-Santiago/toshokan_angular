  import { SafeUrl } from '@angular/platform-browser';
import { Autor } from './autor';
  import { Categoria } from './categoria';
  import { Editorial } from './editorial';

  export interface Libro {
    id: string;
    titulo: string;
    descripcion: string;
    objAutor: Autor;
    fechaPublicacion: string;
    objCategoria: Categoria;
    objEditorial: Editorial;
    paginas: number;
    stockDisponible: number;
    stockEnAlquiler: number;
    precio: number;
    estado: string;
    imgBlob: ArrayBuffer;
    imgPath: String;
    img64: string;
  }
