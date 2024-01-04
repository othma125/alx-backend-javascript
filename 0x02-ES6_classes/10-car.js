export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') {
      throw TypeError('brand must be a string');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._brand = brand;
    if (typeof motor !== 'string') {
      throw TypeError('motor must be a string');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._motor = motor;
    if (typeof color !== 'string') {
      throw TypeError('color must be a string');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._color = color;
  }

  get brand() {
    // eslint-disable-next-line no-underscore-dangle
    return this._brand;
  }

  get motor() {
    // eslint-disable-next-line no-underscore-dangle
    return this._motor;
  }

  get color() {
    // eslint-disable-next-line no-underscore-dangle
    return this._color;
  }

  cloneCar() {
    // eslint-disable-next-line no-underscore-dangle
    return new Car(this._brand, this._motor, this._color);
  }
}
