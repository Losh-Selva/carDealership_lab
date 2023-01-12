const Car = require ('./car');
const carDealership = require ('./cardealership');

beforeEach(() => {
    dealership = new carDealership("BNTA Autos", 4);
    carOne = new Car ('Lamborghini', 120000, 'V10 Petrol');
    carTwo = new Car ('Ferrari', 150000, 'V8 Petrol');
    carThree = new Car ('Mclaren', 175000, 'V8 Petrol')
    dealership.addStock(carOne);
    dealership.addStock(carTwo);
    dealership.addStock(carThree);
})

test ('can get number of cars in stock', () => {
    const expected = 3;
    const actual = dealership.noOfStock()
    expect (actual).toBe(expected);
})
test ('can add car into stock', () => {
    carFour = new Car ('Bugatti', 1300000, 'V16 Petrol');
    dealership.addStock(carFour);
    const expected = 4;
    const actual = dealership.noOfStock();
    expect (actual).toBe(expected);
})
test ('can display error for reaching limit', () => {
    carFour = new Car ('Bugatti', 1300000, 'V16 Petrol');
    carFive = new Car('Bugatti', 1100000, 'V8 Petrol');
    dealership.addStock(carFour);
    const expected = "Exceeded maximum number of stock";
    const actual = dealership.addStock(carFive);
    expect (actual).toBe(expected);
})
test ('can return an array with each manufacturer', () => {
    const expected = ["Lamborghini", "Ferrari", "Mclaren"];
    const actual = dealership.getManufacturer();
    expect (actual).toStrictEqual(expected); //If it should pass with deep equality, replace "toBe" with "toStrictEqual"
})
test ('find all cars from given manufacturer', () => {
    carOneFive = new Car ('Lamborghini', 150000, 'V12 Petrol');
    dealership.addStock(carOneFive);
    const expected = [{
             engineType: "V10 Petrol",
             manufacturer: "Lamborghini",
             price: 120000,
           },
            {
             engineType: "V12 Petrol",
             manufacturer: "Lamborghini",
             price: 150000,
           },];
    const actual = dealership.givenNoOfCars('Lamborghini');
    expect (actual).toEqual(expected); //If it should pass with deep equality, replace "toBe" with "toEqual"
})
test ('can find total value of stock', () => {
    const expected = 445000;
    const actual = dealership.totalValue();
    expect (actual).toStrictEqual(expected); 
})
