import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ListarVehiculoComponent } from './listar-vehiculo.component';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';

describe('ListarVehiculoComponent', () => {
  let component: ListarVehiculoComponent;
  let fixture: ComponentFixture<ListarVehiculoComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarVehiculoComponent],
      imports: [HttpClientTestingModule],
      providers: [VehiculoService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarVehiculoComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create table with 3 vehicle rows plus header when given 3 vehicles', () => {
   
    const vehiculosPrueba: Vehiculo[] = [
      new Vehiculo(1, 'Renault', 'Kangoo', 'VU Express', 2017, 93272, 'Blanco', 'imagen1.jpg'),
      new Vehiculo(2, 'Toyota', 'Corolla', 'XEI', 2020, 45000, 'Gris', 'imagen2.jpg'),
      new Vehiculo(3, 'Chevrolet', 'Spark', 'LS', 2019, 60000, 'Rojo', 'imagen3.jpg')
    ];

    component.vehiculos = vehiculosPrueba;
    fixture.detectChanges();
    
    const tablaElement = debug.query(By.css('table'));
    expect(tablaElement).toBeTruthy();
    
    const encabezadoFilas = debug.queryAll(By.css('thead tr'));
    expect(encabezadoFilas.length).toBe(1);

    const columnas = debug.queryAll(By.css('thead th'));
    expect(columnas.length).toBe(4); 

    expect(columnas[0].nativeElement.textContent.trim()).toBe('#');
    expect(columnas[1].nativeElement.textContent.trim()).toBe('Marca');
    expect(columnas[2].nativeElement.textContent.trim()).toBe('Línea');
    expect(columnas[3].nativeElement.textContent.trim()).toBe('Modelo');

    const filasVehiculos = debug.queryAll(By.css('tbody tr'));
    expect(filasVehiculos.length).toBe(3);

    const primeraFila = filasVehiculos[0];
    const celdasPrimeraFila = primeraFila.queryAll(By.css('th, td'));
    expect(celdasPrimeraFila[0].nativeElement.textContent.trim()).toBe('1');
    expect(celdasPrimeraFila[1].nativeElement.textContent.trim()).toBe('Renault');
    expect(celdasPrimeraFila[2].nativeElement.textContent.trim()).toBe('Kangoo');
    expect(celdasPrimeraFila[3].nativeElement.textContent.trim()).toBe('2017');

    const segundaFila = filasVehiculos[1];
    const celdasSegundaFila = segundaFila.queryAll(By.css('th, td'));
    expect(celdasSegundaFila[0].nativeElement.textContent.trim()).toBe('2');
    expect(celdasSegundaFila[1].nativeElement.textContent.trim()).toBe('Toyota');
    expect(celdasSegundaFila[2].nativeElement.textContent.trim()).toBe('Corolla');
    expect(celdasSegundaFila[3].nativeElement.textContent.trim()).toBe('2020');

    const terceraFila = filasVehiculos[2];
    const celdasTerceraFila = terceraFila.queryAll(By.css('th, td'));
    expect(celdasTerceraFila[0].nativeElement.textContent.trim()).toBe('3');
    expect(celdasTerceraFila[1].nativeElement.textContent.trim()).toBe('Chevrolet');
    expect(celdasTerceraFila[2].nativeElement.textContent.trim()).toBe('Spark');
    expect(celdasTerceraFila[3].nativeElement.textContent.trim()).toBe('2019');
  });
});
