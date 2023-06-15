export interface User {
    id: string;
    name: string;
    age: number;
}

export class Component {
    private _user?: User;

    public setUser(user: User | undefined): void {
        this._user = user;
    }

    public get age(): number | undefined {
        return this._user?.age;
    }

    public incrementAge(): void {
        if (!this._user) throw new Error('Cannot increment age, user undefined');
        this._user.age += 1;
    }

    public decrementAge(): void {
        if (!this._user) throw new Error('Cannot decrement age, user undefined');
        this._user.age -= 1;
    }
}
