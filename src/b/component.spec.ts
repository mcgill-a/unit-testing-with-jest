import { Profile, User } from './component';

describe('Profile', () => {
    let component: Profile;

    beforeEach(() => {
        component = new Profile();
    });

    it('should correctly identify when the user is an admin', () => {
        component.user = <User>{ isAdmin: true };
        expect(component.isAdmin).toBe(true);
    });

    it('should correctly identify when the user is not an admin', () => {
        component.user = <User>{ isAdmin: false };
        expect(component.isAdmin).toBe(false);
    });

    it('should not be an admin if the user is undefined', () => {
        component.user = void 0;
        expect(component.isAdmin).toBe(false);
    });
});
