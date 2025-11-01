import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarVehiculoComponent } from './listar-vehiculo/listar-vehiculo.component';



@NgModule({
  declarations: [
    ListarVehiculoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListarVehiculoComponent
  ]
})
export class VehiculoModule { }
