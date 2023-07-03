import { Component, User } from './component';

describe('Component', () => {
    let component: Component;
    beforeEach(() => {
        component = new Component();
    });

    it('should return age as undefined if no user', () => {
        component.setUser(void 0);

        expect(component.age).toBeUndefined();
    });

    it('should correctly identify the user age', () => {
        const user = mockUser(50);
        component.setUser(user);

        expect(component.age).toEqual(user.age);
    });

    it('should increment the age of the user', () => {
        component.setUser(mockUser(40));

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
        component.setUser(mockUser(40));

        component.decrementAge();

        expect(component.age).toEqual(39);
    });

    it('should throw on decrement age if user is undefined', () => {
        expect(() => {
            component.setUser(void 0);
            component.decrementAge();
        }).toThrow();
    });

    function mockUser(age: number): User {
        return <User>{ age };
    }
});
