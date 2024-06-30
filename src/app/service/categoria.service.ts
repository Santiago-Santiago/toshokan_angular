import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../model/categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  private baseUrl = 'http://localhost:8080/api/categorias';

  constructor(private http: HttpClient) {}

  public listar(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.baseUrl);
  }

  public registrar(categoria: Categoria): Observable<any> {
    return this.http.post<any>(this.baseUrl, categoria);
  }

  public buscar(id: String): Observable<Categoria> {
    return this.http.get<Categoria>(this.baseUrl + `/${id}`);
  }

  public actualizar(id: String, categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(this.baseUrl + `/${id}`, categoria);
  }

  public eliminar(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/${id}`);
  }
}
