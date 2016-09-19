import {Vehicle} from './vehicle.js'


export class Drone extends Vehicle {
  constructor(license, model, latLong) {
    super(license, model, latLong);
    this.airTimeHours = null;
    this.base = null;
  }
}



























{
  // constructor(id, name) {
  //   this._id = id;
  //   this.name = name;
  // }
  // // //Static Method
  // // static getCompany() {
  // //   //undefined because there is no instance
  // //   // console.log(this.id);
  // //   console.log('in getCompany');
  // // }
  // //getter
  // get id() {
  //   return this._id;
  // }
  // //setter
  // set id(value) {
  //   this._id = value;
  // }
  // // //Method
  // // fly(){
  // //   console.log('Drone ' + this.id + ' is flying.')
  // // }
}
