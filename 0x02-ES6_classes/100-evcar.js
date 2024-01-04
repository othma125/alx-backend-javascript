import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    if (typeof range !== 'number') {
      throw TypeError('range must be a number');
    }
    if (typeof brand !== 'string') {
      throw TypeError('brand must be a string');
    }
    if (typeof motor !== 'string') {
      throw TypeError('motor must be a string');
    }
    super(brand, motor, color);
    if (typeof color !== 'string') {
      throw TypeError('color must be a string');
    }
    this.range = range;
  }

  get range() {
    // eslint-disable-next-line no-underscore-dangle
    return this._range;
  }

  set range(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._range = value;
  }

  cloneCar() {
    const { brand, motor, color } = this;
    return new Car(brand, motor, color);
  }
}
