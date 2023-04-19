import { User } from "./user";

export class Teacher extends User{
    firstName!: String;
    lastName!: String;
    email!: String;
    contact!: String;
    userName!: String;
    password!: String;

    constructor()
    {
        super();
    }
}
