import User from './UserController';
import Config from '../../config';

export default class Users {
    users: User[] = [];

    public constructor() {

    }

    public getUsers(): User[] {
        return this.users;
    }
    // public getUser(id: number): User{
    //     return this.users.find(user => user.id === id);
    // }


}