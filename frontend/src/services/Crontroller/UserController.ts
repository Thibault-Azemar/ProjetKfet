import UserRepository from "../Repository/UserRepository";

export default class User {
    id: string;
    name: string;
    firstname: string;
    email: string;
    role: string;
    users: User[] = [];

    userRepo: UserRepository = new UserRepository();

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


    public addUser(name: string, firstname: string, email: string, password: string, role: string): void {
        this.userRepo.addUser(name, firstname, email, password, role).then((user: User) => {
            this.users.push(user);
        })
            .catch((error: any) => {
                console.error(error);
            });
    }

    public deleteUser(id: string): void {
        this.userRepo.deleteUser(id).then((status: number) => {
            if (status === 200) {
                this.users = this.users.filter(user => user.id !== id);
            }
        });
    }

    public updateUser(id: string, name: string, firstname: string, email: string, password: string, role: string): void {
        this.userRepo.updateUser(id, name, firstname, email, password, role).then((status: number) => {
            if (status === 200) {
                const user = this.users.find(user => user.id === id);
                if (user) {
                    user.name = name;
                    user.firstname = firstname;
                    user.email = email;
                    user.role = role;
                }
            }
        });
    }
}
