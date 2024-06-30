import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../model/empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  private baseUrl = 'http://localhost:8080/api/empleados';

  constructor(private http: HttpClient) {}

  public listar(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.baseUrl);
  }

  public registrar(empleado: Empleado): Observable<any> {
    return this.http.post<any>(this.baseUrl, empleado);
  }

  public buscar(id: String): Observable<Empleado> {
    return this.http.get<Empleado>(this.baseUrl + `/${id}`);
  }

  public actualizar(id: String, empleado: Empleado): Observable<Empleado> {
    return this.http.put<Empleado>(this.baseUrl + `/${id}`, empleado);
  }

  public eliminar(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

  public validarIngreso(
    username: String,
    password: String
  ): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(
      this.baseUrl + `/validaringreso/${username}` + `/${password}`
    );
  }
}
