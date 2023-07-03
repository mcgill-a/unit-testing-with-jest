export interface User {
    name: string;
    isAdmin: boolean;
}

export class Profile {
    public user?: User;

    public get isAdmin(): boolean {
        return !!this.user?.isAdmin;
    }
}
