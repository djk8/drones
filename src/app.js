import $ from 'jquery';
import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js';
import{FleetDataService} from './services/fleet-data-services.js';
import {Button} from './ui/button.js';
import {Image} from './ui/image.js';
import {TitleBar} from './ui/title-bar.js';
import {DataTable} from './ui/data-table.js';
import {GoogleMap} from './ui/google-map.js';
import {ApplicationBase} from './framework/application-base.js';
import {HomePage} from './home-page.js';
import {CarsPage} from './cars-page.js';
import {DronesPage} from './drones-page.js';
import{MapPage} from './map-page.js';



export class App extends ApplicationBase {

  constructor() {
    super('Fleet Manager');
    this.dataService = new FleetDataService(fleet);
    this.dataService.loadData(fleet);

    this.addRoute('Home', new HomePage(), true);
    this.addRoute('Cars', new CarsPage());
    this.addRoute('Drones', new DronesPage());
    this.addRoute('Map', new MapPage());

  }
}

export let application = new App();
application.show($('body'));

// let dataService = new FleetDataService(fleet);
// dataService.loadData(fleet);

// let centerOfMap = {lat: 40.783661, lng: -73.965883};
// let map = new GoogleMap(centerOfMap, dataService.cars);
//
//
// map.appendToElement($('body'));
//
// // Data Table with headers
// let headers = "License Make Model Miles".split(' ');
// let dt = new DataTable(headers, dataService.cars);
// dt.appendToElement($('body'));
//
// // Add links to TitleBar
// let tb = new TitleBar('Our Application');
// tb.addLink('Home', '');
// tb.addLink('Cars', '');
// tb.addLink('Drones', '');
// tb.addLink('Map', '');
// tb.appendToElement($('body'));

// // Add Button 'Click Me'
// let b = new Button('Click Me');
// b.appendToElement($('body'));
// // Add drone image
// let i = new Image('../images/drone.jpg');
// i.appendToElement($('body'));



// let dataService = new FleetDataService();
// dataService.loadData(fleet);
//
// // console.log(dataService.cars);
// // console.log(dataService.drones);
//
// // filter cars by an 'init' string
// let cars = dataService.filterCarsByMake('e');
// for (let car of cars)
//     console.log(car.make);

// //log error messages to console
// for (let e of dataService.errors)
//   console.log(e.message);

//Find one car with this license number: getCarByLicense
// let car = dataService.getCarByLicense('BP5000');


// //find license plate numbers of validated cars in alphabetical order
// let cars = dataService.getCarsSortedByLicense();
// for (let car of cars)
//     console.log(car.license);




// for (let car of dataService.cars)
//   console.log(car.license);
//
//   for (let drone of dataService.drones)
//     console.log(drone.license);


// let c = new Car('A123');
// let d = new Drone('B456');

// //Static Property
// // Drone.maxHeight = 2000;
//
// let drone = new Drone('A123', 'modafuckajones');
// let drone2 = new Drone('B456', 'deesguy');
// drone.id = 'C789';
// //method only works on instances
// // drone.fly();
// // drone2.fly();
//
// console.log('drone id: ' + drone.id + ' ' + drone.name);
//
// //static method only works on class
// // Drone.getCompany();
