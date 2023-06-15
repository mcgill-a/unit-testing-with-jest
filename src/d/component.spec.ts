import { Component, User } from './component';

const mockData: User = { id: 'foo', name: 'bar', age: 40 };

describe('Component', () => {
    let component: Component;
    beforeEach(() => {
        component = new Component();
        component.setUser(mockData);
    });

    it('should return age as undefined if no user', () => {
        expect(component.age).toBeUndefined();
    });

    it('should correctly identify the user age', () => {
        expect(component.age).toEqual(mockData.age);
    });

    it('should increment the age of the user', () => {
        component.incrementAge();
        expect(component.age).toEqual(41);
    });

    it('should throw on increment age if user is undefined', () => {
        expect(() => {
            component.setUser(void 0);
            component.incrementAge();
        }).toThrow();
    });

    it('should decrement the age of the user', () => {
        component.decrementAge();
        expect(component.age).toEqual(39);
    });

    it('should throw on decrement age if user is undefined', () => {
        expect(() => {
            component.setUser(void 0);
            component.decrementAge();
        }).toThrow();
    });
});
