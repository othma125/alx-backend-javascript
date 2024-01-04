import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  cloneCar() {
    // eslint-disable-next-line no-underscore-dangle
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
