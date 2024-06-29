import { Libro } from './libro';
import { Usuario } from './usuario';

export interface BoletaAlquiler {
  id: number;
  detalleLibro: string;
  importeTotal: number;
  fechaAlquiler: string;
  diasAlquilados: number;
  fechaVencimiento: string;
  fechaEntrega: string;
  codigoBoleta: string;
  precioXDia: number;
  titulo: string;
  diasRetraso: number;
  mora: number;
  objUsuario: Usuario;
  objLibro: Libro;
}
