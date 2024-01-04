export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') {
      throw TypeError('brand must be a string');
    }
    this._brand = brand;
    if (typeof motor !== 'string') {
      throw TypeError('motor must be a string');
    }
    this._motor = motor;
    if (typeof color !== 'string') {
      throw TypeError('color must be a string');
    }
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
