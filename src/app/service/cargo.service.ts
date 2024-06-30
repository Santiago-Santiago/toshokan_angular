import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from '../model/cargo';

@Injectable({
  providedIn: 'root',
})
export class CargoService {
  private baseUrl = 'http://localhost:8080/api/cargos';

  constructor(private http: HttpClient) {}

  public listar(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(this.baseUrl);
  }

  public registrar(cargo: Cargo): Observable<any> {
    return this.http.post<any>(this.baseUrl, cargo);
  }

  public buscar(id: String): Observable<Cargo> {
    return this.http.get<Cargo>(this.baseUrl + `/${id}`);
  }

  public actualizar(id: String, empleado: Cargo): Observable<Cargo> {
    return this.http.put<Cargo>(this.baseUrl + `/${id}`, empleado);
  }

  public eliminar(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/${id}`);
  }
}
