import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private baseUrl = 'http://localhost:8080/api/usuarios';

  constructor(private http: HttpClient) {}

  public listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl);
  }

  public registrar(usuario: Usuario): Observable<any> {
    return this.http.post<any>(this.baseUrl, usuario);
  }

  public buscar(id: String): Observable<Usuario> {
    return this.http.get<Usuario>(this.baseUrl + `/${id}`);
  }

  public actualizar(id: String, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.baseUrl + `/${id}`, usuario);
  }
  public eliminar(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

  public validarIngreso(
    username: String,
    password: String
  ): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(
      this.baseUrl + `/validaringreso/${username}` + `/${password}`
    );
  }
}
