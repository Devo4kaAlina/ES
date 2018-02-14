/**
* №1
*/
function planet(name) {
	this.name = name;
	this.getName = function() {
		return 'Planet name is' + this.name
	}
}

function PlanetWithSatellite (satellite) {
	planet.call(this);
	this.getName = function() {
		return 'Planet name is' + this.name + '.The satellite is' + this.satellite 
	}
}
let earth = new PlanetWithSatellite('earth', 'moon');
console.log('PlanetWithSatellite = ', earth.getName())


/**
* №2
*/
function building(name, floor) {
	this.name = name;
	this.floor = floor;
	this.getFloor = function() {
		return 'Floor(s) - ' + this.floor
	};
	this.setFloor = function(fl) {
		this.floor = fl
	};
}

function home(room) {
	building.call(this);
	this.allRooms = room;
	this.getFloor = function() {
		return {floor: this.floor, rooms: this.floor*this.allRooms}
	}
}
let newBuid = new building('home name', 5);
console.log('newBuid.getFloor = ', newBuid.getFloor())
newBuid.setFloor(9);
console.log('newBuid.getFloor = ', newBuid.getFloor())

var home1 = new home(5);
console.log('home1.getFloor() = ', home1.getFloor())

