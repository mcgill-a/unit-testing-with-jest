export interface User {
    name: string;
    isAdmin: boolean; // 👀
}

export class Profile {
    public user?: User;

    // If you have written adequate unit tests for this file,
    // you'll find a bug! Have a go at fixing it and make sure your
    // tests pass. I think we can use the user isAdmin field :)
    public get isAdmin(): boolean {
        return false;
    }
}
