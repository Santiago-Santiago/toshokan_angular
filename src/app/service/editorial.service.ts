import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Editorial } from '../model/editorial';

@Injectable({
  providedIn: 'root',
})
export class EditorialService {
  private baseUrl = 'http://localhost:8080/api/editoriales';

  constructor(private http: HttpClient) {}

  public listar(): Observable<Editorial[]> {
    return this.http.get<Editorial[]>(this.baseUrl);
  }

  public registrar(editorial: Editorial): Observable<any> {
    return this.http.post<any>(this.baseUrl, editorial);
  }

  public buscar(id: String): Observable<Editorial> {
    return this.http.get<Editorial>(this.baseUrl + `/${id}`);
  }

  public actualizar(id: String, editorial: Editorial): Observable<Editorial> {
    return this.http.put<Editorial>(this.baseUrl + `/${id}`, editorial);
  }

  public eliminar(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/${id}`);
  }
}
