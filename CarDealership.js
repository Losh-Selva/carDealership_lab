const Car = require ('./car');

const carDealership = function (name, maximumNumberOfCars){
    this.name = name;
    this.maximumNumberOfCars = maximumNumberOfCars;
    this.inStock = [];
}
 

//Method for number of cars in stock
carDealership.prototype.noOfStock = function (){
    return this.inStock.length;
}


//Method for add cars to stock
carDealership.prototype.addStock = function (Car){
    if (this.noOfStock() === this.maximumNumberOfCars){
        return "Exceeded maximum number of stock";
    } else if (this.noOfStock() < this.maximumNumberOfCars){
        this.inStock.push(Car);
    }
}

//Method to return array containing each car's manufacturer 
carDealership.prototype.getManufacturer = function (){
    return this.inStock.map(car => car.manufacturer);
}

//Find all cars from given manufacturer 
carDealership.prototype.givenNoOfCars = function (manufacturer){
    return this.inStock.filter(car => car.manufacturer === manufacturer);
}

//Find total values of cars in stock 
carDealership.prototype.totalValue = function(){
    return this.inStock.map (car => car.price).reduce ((accumulator, currentValue) => {
    return    accumulator + currentValue
    },0)
}


// testing to check methods
// dealership= new carDealership ("BNTA Autos", 22)
// carOne = new Car ('Lamborghini', 120000, 'V10 Petrol');
// carOneFive = new Car ('Lamborghini', 150000, 'V12 Petrol');
// carTwo = new Car ('Ferrari', 150000, 'V8 Petrol');
// carThree = new Car ('Mclaren', 175000, 'V8 Petrol')
// dealership.addStock(carOne);
// dealership.addStock(carOneFive)
// dealership.addStock(carTwo);
// dealership.addStock(carThree);
// // console.log(dealership.inStock);
// // console.log(dealership.givenNoOfCars('Lamborghini'));
// console.log(dealership.totalValue());





module.exports = carDealership;