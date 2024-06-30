import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Libro } from './../model/libro';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  private baseUrl = 'http://localhost:8080/api/libros';
  private libros: Libro[] = [];

  constructor(private http: HttpClient) {}

  public listar(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.baseUrl);
  }

  public buscar(id: String): Observable<Libro> {
    return this.http.get<Libro>(this.baseUrl + `/${id}`);
  }

  public buscarPorTitulo(consulta: String): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.baseUrl + `/searchbar/${consulta}`);
  }

  public registrar(libro: Libro): Observable<any> {
    const libroToSend = {
      ...libro,
      imgBlob: null,
    };
    return this.http.post<Libro>(this.baseUrl, libroToSend);
  }

  public actualizar(id: String, libro: Libro): Observable<Libro> {
    return this.http.put<Libro>(this.baseUrl + `/${id}`, libro);
  }

  public eliminar(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/${id}`);
  }
}
