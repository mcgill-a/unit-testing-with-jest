import { Calculator } from './component';

describe('Calculator', () => {
    let component: Calculator;

    beforeEach(() => {
        component = new Calculator();
    });

    it('should correctly add two numbers together', () => {
        expect(component.add(10, 20)).toEqual(30);
    });

    it('should correctly subtract two numbers together', () => {
        expect(component.subtract(20, 15)).toEqual(5);
    });

    it('should correctly sum a list of numbers', () => {
        expect(component.sum([5, 10, 60])).toEqual(75);
    });
});
