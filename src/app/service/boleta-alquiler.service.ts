import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BoletaAlquiler } from '../model/boleta-alquiler';

@Injectable({
  providedIn: 'root',
})
export class BoletaAlquilerService {
  private baseUrl = 'http://localhost:8080/api/boletadealquileres';

  constructor(private http: HttpClient) {}

  public listar(): Observable<BoletaAlquiler[]> {
    return this.http.get<BoletaAlquiler[]>(this.baseUrl);
  }

  public buscar(id: String): Observable<BoletaAlquiler> {
    return this.http.get<BoletaAlquiler>(this.baseUrl + `/${id}`);
  }

  public buscarPorUsuario(id: String): Observable<BoletaAlquiler[]> {
    return this.http.get<BoletaAlquiler[]>(this.baseUrl + `/foruser/${id}`);
  }

  public buscarRentasActivas(id: String): Observable<BoletaAlquiler[]> {
    return this.http.get<BoletaAlquiler[]>(
      this.baseUrl + `/listtoactiverent/${id}`
    );
  }

  public registrar(car: BoletaAlquiler): Observable<any> {
    return this.http.post<any>(this.baseUrl, car);
  }

  public actualizar(
    id: String,
    car: BoletaAlquiler
  ): Observable<BoletaAlquiler> {
    return this.http.put<BoletaAlquiler>(this.baseUrl + `/${id}`, car);
  }

  public eliminar(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + `/${id}`);
  }
}
