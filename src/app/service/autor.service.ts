import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor } from '../model/autor';

@Injectable({
  providedIn: 'root',
})
export class AutorService {
  private baseUrl = 'http://localhost:8080/api/autores';

  constructor(private http: HttpClient) {}

  public listar(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.baseUrl);
  }

  public registrar(autor: Autor): Observable<any> {
    return this.http.post<any>(this.baseUrl, autor);
  }

  public buscar(id: String): Observable<Autor> {
    return this.http.get<Autor>(this.baseUrl + `/${id}`);
  }

  public actualizar(id: String, autor: Autor): Observable<Autor> {
    return this.http.put<Autor>(this.baseUrl + `/${id}`, autor);
  }

  public eliminar(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/${id}`);
  }
}
