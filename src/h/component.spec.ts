import { AccountService, User, UserPortal } from './component';

describe('UserPortal', () => {
    let component: UserPortal;
    let accountService: Partial<AccountService>;
    let user: Partial<User>;

    beforeEach(() => {
        user = {};
        accountService = {
            doLogin: jest.fn(),
            doLogout: jest.fn(),
            get user() {
                return <User>user;
            }
        };
        component = new UserPortal(<AccountService>accountService);
    });

    it('should get the user from the account service', () => {
        user = <User>{ id: 'foo', name: 'bar' };
        expect(component.user).toEqual(user);
    });

    it('should get the account service to login', () => {
        component.login();
        expect(accountService.doLogin).toHaveBeenCalled();
    });

    it('should get the account service to logout', () => {
        component.logout();
        expect(accountService.doLogout).toHaveBeenCalled();
    });
});

describe('AccountService', () => {
    let service: AccountService;

    beforeEach(() => {
        service = new AccountService();
    });

    it('should set the user on login', () => {
        service.doLogin('bar');
        expect(service.user).toEqual(expect.objectContaining({ id: 'bar' }));
    });

    it('should reset the user on logout', () => {
        service.doLogin('bar');

        service.doLogout();

        expect(service.user).toBeUndefined();
    });

    it('should not throw on logout if user is undefined', () => {
        expect(() => service.doLogout()).not.toThrow();
    });
});
