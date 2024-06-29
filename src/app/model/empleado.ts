import { Cargo } from './cargo';
export interface Empleado {
  id: string;
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  DNI: string;
  fechaContrato: string;
  celular: string;
  email: string;
  objCargo: Cargo;
  password: string;
}
