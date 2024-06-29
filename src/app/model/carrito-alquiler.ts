import { Usuario } from './usuario';
import { Libro } from './libro';
export interface CarritoAlquiler {
  id: number;
  objLibro: Libro;
  objUsuario: Usuario;
  tituloLibro: string;
  stockDisponible: number;
  precioLibro: number;
}
