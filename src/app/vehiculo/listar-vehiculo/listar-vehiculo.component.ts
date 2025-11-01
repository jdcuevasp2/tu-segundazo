import { Component,  OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-listar-vehiculo',
  templateUrl: './listar-vehiculo.component.html',
  styleUrls: ['./listar-vehiculo.component.css']
})
export class ListarVehiculoComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  conteoMarcas: { marca: string, cantidad: number }[] = [];

  constructor(private vehiculoService: VehiculoService ) { }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      // Calcular el conteo automáticamente cuando se cargan los vehículos
      this.calcularConteoMarcas();
    });
  }

  calcularConteoMarcas(): void {
    this.conteoMarcas = this.vehiculoService.getConteoMarcas(this.vehiculos);
  }

  ngOnInit(): void {
    this.getVehiculos();
  }

  
}
