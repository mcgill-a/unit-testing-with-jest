export interface User {
    id: string;
    name: string;
}

export class AccountService {
    private _user?: User;

    public get user(): User | undefined {
        return this._user;
    }

    public doLogin(id: string): void {
        this._user = { id, name: 'foo' };
    }

    public doLogout(): void {
        if (!this.user) return;
        this._user = void 0;
    }
}

export class UserPortal {
    constructor(private accountService: AccountService) {}

    public get user(): User | undefined {
        return this.accountService.user;
    }

    public login(): void {
        this.accountService.doLogin('foo');
    }

    public logout(): void {
        this.accountService.doLogout();
    }
}
