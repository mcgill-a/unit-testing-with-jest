import { AccountService, UserPortal } from './component';

describe('UserPortal', () => {
    let component: UserPortal;
    let accountService: Partial<AccountService>;

    beforeEach(() => {
        accountService = {};
        component = new UserPortal(<AccountService>accountService);
    });

    it('should exist', () => {
        expect(component).toBeTruthy();
    });
});

describe('AccountService', () => {
    let service: AccountService;

    beforeEach(() => {
        service = new AccountService();
    });

    it('should exist', () => {
        expect(service).toBeTruthy();
    });
});
