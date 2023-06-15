import { Profile, User } from './component';

describe('Profile', () => {
    let component: Profile;

    beforeEach(() => {
        component = new Profile();
    });

    // remember to remove the 'should exist' tests - they're just placeholders
    it('should exist', () => {
        expect(component).toBeTruthy();
    });

    it('should correctly identify whether the user is an admin', () => {
        component.user = <User>{ isAdmin: true };
        expect(component.isAdmin).toBeDefined();
    });
});
