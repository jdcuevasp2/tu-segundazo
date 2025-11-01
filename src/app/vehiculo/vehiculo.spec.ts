import { Vehiculo } from './vehiculo';

describe('Vehiculo', () => {
  it('should create an instance', () => {
    expect(new Vehiculo(1, 'Toyota', 'Corolla', 'XEI', 2020, 45000, 'Gris', 'imagen.jpg')).toBeTruthy();
  });
});
