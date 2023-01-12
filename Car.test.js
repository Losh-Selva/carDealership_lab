const Car = require ('./car');

beforeEach(() => {
    car = new Car('Lamborghini', 120000, 'V10 Petrol');
})

test ('can access manufacturer', () => {
    const expected = 'Lamborghini';
    const actual = car.manufacturer;
    expect (actual).toBe(expected);
})

test ('can access price', () => {
    const expected = 120000;
    const actual = car.price;
    expect (actual).toBe(expected);
})

test ('can access engineType', () => {
    const expected = 'V10 Petrol';
    const actual = car.engineType;
    expect (actual).toBe(expected);
})
