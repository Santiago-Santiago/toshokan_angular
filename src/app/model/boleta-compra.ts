import { Libro } from './libro';
import { Usuario } from './usuario';

export interface BoletaCompra {
  id: number;
  detallesLibro: string;
  importeTotal: number;
  fechaCompra: string;
  objLibro: Libro;
  cantidad: number;
  codigoBoleta: string;
  precio: number;
  objUsuario: Usuario;
}
