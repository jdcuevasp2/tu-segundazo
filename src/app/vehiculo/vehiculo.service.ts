import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from './vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getVehiculos(): Observable<Vehiculo[]> {
   return this.http.get<Vehiculo[]>(this.apiUrl);
 }

 private contarVehiculosPorMarca(vehiculos: Vehiculo[]): { [marca: string]: number } {
   return vehiculos.reduce((contador, vehiculo) => {
     const marca = vehiculo.marca;
     contador[marca] = (contador[marca] || 0) + 1;
     return contador;
   }, {} as { [marca: string]: number });
 }

 getConteoMarcas(vehiculos: Vehiculo[]): { marca: string, cantidad: number }[] {
   const conteo = this.contarVehiculosPorMarca(vehiculos);
   return Object.entries(conteo).map(([marca, cantidad]) => ({ marca, cantidad }));
 }

}