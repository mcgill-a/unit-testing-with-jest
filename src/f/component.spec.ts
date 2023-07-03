import { Car, CarColor, Shop } from './component';

describe('Shop', () => {
    let component: Shop;

    beforeEach(() => {
        component = new Shop();
    });

    it('should add an order to the list of orders', () => {
        const car = mockCar('white');

        component.newOrder(car, 1000);

        expect(component.orders).toEqual([expect.objectContaining({ car })]);
    });

    function mockCar(color: CarColor): Car {
        return <Car>{ color, make: 'Audi' };
    }
});
