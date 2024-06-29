import { Libro } from './libro';
import { Usuario } from './usuario';
export interface CarritoCompras {
  id: number;
  objUsuario: Usuario;
  objLibro: Libro;
  tituloLibro: string;
  stockDisponible: number;
  precio: number;
}
