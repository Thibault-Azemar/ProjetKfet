export default class User {
    id: string;
    name: string;
    firstname: string;
    email: string;
    role: string;

    /**
    * constructor
    */
    public constructor(id: string, username: string, password: string, email: string, role: string = "USER") {

        this.id = id
        this.name = username
        this.firstname = password
        this.email = email
        this.role = role
    }

}
