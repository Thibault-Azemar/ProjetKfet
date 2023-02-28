import Users from "./UsersController";


export default class User {
    id: number;
    name: string;
    firstname: string;
    email: string;
    role: string;

    /**
    * constructor
    */
    public constructor(id: number, username: string, password: string, email: string, role: string = "USER") {

        this.id = id
        this.name = username
        this.firstname = password
        this.email = email
        this.role = role
    }

}
