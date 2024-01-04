export default class Car {
  constructor(brand, motor, color) {
    // eslint-disable-next-line no-underscore-dangle
    this._brand = brand;
    // eslint-disable-next-line no-underscore-dangle
    this._motor = motor;
    // eslint-disable-next-line no-underscore-dangle
    this._color = color;
  }

  // eslint-disable-next-line class-methods-use-this
  cloneCar() {
    // eslint-disable-next-line no-underscore-dangle
    const newCar = new Car(this._brand, this._motor, this._color);
    // eslint-disable-next-line no-underscore-dangle
    newCar._brand = undefined;
    // eslint-disable-next-line no-underscore-dangle
    newCar._motor = undefined;
    // eslint-disable-next-line no-underscore-dangle
    newCar._color = undefined;
    return newCar;
  }
}
