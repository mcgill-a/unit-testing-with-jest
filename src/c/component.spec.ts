import { SimpleBank } from './component';

describe('SimpleBank', () => {
    let component: SimpleBank;

    beforeEach(() => {
        component = new SimpleBank();
    });

    it('should throw if trying to deposit 0', () => {
        expect(() => component.deposit(0)).toThrow();
    });

    it('should throw if trying to deposit an amount less than 0', () => {
        expect(() => component.deposit(-5)).toThrow();
    });

    it('should increase the balance when depositing a postive number', () => {
        component.deposit(10);
        expect(component.balance).toEqual(10);
    });

    it('should throw if trying to withdraw 0', () => {
        expect(() => component.deposit(0)).toThrow();
    });

    it('should throw if trying to withdraw an amount less than 0', () => {
        expect(() => component.withdraw(-5)).toThrow();
    });

    it('should decrease the balance when withdrawing a positive number', () => {
        component.withdraw(20);
        expect(component.balance).toEqual(-20);
    });
});
