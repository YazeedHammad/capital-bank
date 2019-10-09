export class User {
    public username: string;
    public password: string;

    constructor(username: string, password: string) {
        this.username = username.toLowerCase()
        this.password = password;
    }
}
