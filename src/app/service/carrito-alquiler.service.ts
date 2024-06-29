import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CarritoAlquiler } from '../model/carrito-alquiler';

@Injectable({
  providedIn: 'root',
})
export class CarritoAlquilerService {
  private baseUrl = 'http://localhost:8080/api/carritoalquiler';

  constructor(private http: HttpClient) {}

  public listar(): Observable<CarritoAlquiler[]> {
    return this.http.get<CarritoAlquiler[]>(this.baseUrl);
  }

  public buscar(id: String): Observable<CarritoAlquiler> {
    return this.http.get<CarritoAlquiler>(this.baseUrl + `/${id}`);
  }

  public buscarPorLibroYUsuario(
    libroID: String,
    userID: String
  ): Observable<CarritoAlquiler[]> {
    const url = `${this.baseUrl}/foruserandbook/${libroID}/${userID}`;
    return this.http.get<CarritoAlquiler[]>(url);
  }

  public addToRentCar(userID: String, libroID: String): Observable<number> {
    return this.http.get<number>(
      this.baseUrl + '/addToCarAlquiler' + `/${userID}` + `/${libroID}`
    );
  }

  public listarDatosEsp(userID: String): Observable<CarritoAlquiler[]> {
    return this.http.get<CarritoAlquiler[]>(
      this.baseUrl + '/lsdatos' + `/${userID}`
    );
  }

  public listarColumns(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl + '/columns');
  }

  public listarLastCode(): Observable<CarritoAlquiler[]> {
    return this.http.get<CarritoAlquiler[]>(this.baseUrl);
  }

  public registrar(car: CarritoAlquiler): Observable<any> {
    return this.http.post<any>(this.baseUrl, car);
  }

  public actualizar(
    id: String,
    car: CarritoAlquiler
  ): Observable<CarritoAlquiler> {
    return this.http.put<CarritoAlquiler>(this.baseUrl + `/${id}`, car);
  }

  public eliminar(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

  public eliminarPorUSuario(id: number): Observable<any> {
    const url = this.baseUrl + `/foruser/${id}`;
    return this.http.delete(url);
  }

  pagarCarritoAlquiler(
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
    const url = `${this.baseUrl}/constanciaregistroalquiler/${CodBol}`;
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
