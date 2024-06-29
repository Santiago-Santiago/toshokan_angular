import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CarritoCompras } from '../model/carrito-compras';

@Injectable({
  providedIn: 'root',
})
export class CarritoComprasService {
  private baseUrl = 'http://localhost:8080/api/carritocompra';

  constructor(private http: HttpClient) {}

  public listar(): Observable<CarritoCompras[]> {
    return this.http.get<CarritoCompras[]>(this.baseUrl);
  }

  public buscar(id: String): Observable<CarritoCompras> {
    return this.http.get<CarritoCompras>(this.baseUrl + `/${id}`);
  }

  public buscarPorLibroYUsuario(
    libroID: String,
    userID: String
  ): Observable<CarritoCompras[]> {
    const url = `${this.baseUrl}/foruserandbook/${libroID}/${userID}`;
    return this.http.get<CarritoCompras[]>(url);
  }

  public addToBuyCar(userID: String, libroID: String): Observable<number> {
    return this.http.get<number>(
      this.baseUrl + '/addToCarCompra' + `/${userID}` + `/${libroID}`
    );
  }

  public listarDatosEsp(userID: String): Observable<CarritoCompras[]> {
    return this.http.get<CarritoCompras[]>(
      this.baseUrl + '/lsdatos' + `/${userID}`
    );
  }

  public listarColumns(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl + '/columns');
  }

  public registrar(car: CarritoCompras): Observable<any> {
    return this.http.post<any>(this.baseUrl, car);
  }

  public actualizar(
    id: String,
    car: CarritoCompras
  ): Observable<CarritoCompras> {
    return this.http.put<CarritoCompras>(this.baseUrl + `/${id}`, car);
  }

  public eliminar(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

  public eliminarPorUSuario(id: number): Observable<any> {
    const url = this.baseUrl + `/foruser/${id}`;
    return this.http.delete(url);
  }

  pagarCarritoCompras(
    usuarioID: string,
    cantidades: number[]
  ): Observable<string> {
    return this.http.post(
      this.baseUrl + `/pagarcarrito/${usuarioID}`,
      cantidades,
      { responseType: 'text' }
    );
  }

  downloadPDF(CodBol: string): void {
    const url = `${this.baseUrl}/constanciaregistrocompras/${CodBol}`;
    this.http.get(url, { responseType: 'blob' }).subscribe(
      (response: Blob) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url); // Abre el PDF en una nueva pestaña
      },
      (error) => {
        console.error('Error downloading the PDF', error);
      }
    );
  }
}
