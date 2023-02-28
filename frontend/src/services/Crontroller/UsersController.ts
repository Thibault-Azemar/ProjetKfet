import User from './UserController';
import Config from './Config';

export default class Users {
    users: User[] = [];

    public constructor() {
        const API_URL = Config.API_URL;
        fetch(API_URL + 'user/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data =>
                data.forEach((data: any) => {
                    console.log(data)
                    const user = new User(data.id, data.name, data.firstname, data.email, data.role);
                    this.users.push(user);
                    console.log(this.users)
                })

            )
            .catch(error => {
                console.error('Error:', error);
            }
            );
    }

    public getUsers(): User[] {
        return this.users;
    }
    // public getUser(id: number): User{
    //     return this.users.find(user => user.id === id);
    // }

    public addUser(name: string, firstname: string, email: string, password: string, role: string): void {
        const API_URL = Config.API_URL;
        const params = { role: role, email: email, name: name, firstname: firstname, password: firstname }

        fetch(API_URL + 'user/add' + new URLSearchParams(params), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                const user = new User(data.id, name, firstname, email, role);
                this.users.push(user);
            }
            )
            .catch(error => {
                console.error('Error:', error);
            }
            );

    }
    public deleteUser(id: string): void {
        const API_URL = Config.API_URL;
        fetch(API_URL + 'user/' + id, {

            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.users = this.users.filter(user => user.id !== id);
            }
            )
            .catch(error => {
                console.error('Error:', error);
            }
            );
    }
    public updateUser(id: string, name?: string, firstname?: string, email?: string, role?: string): void {
        let params = { id: id, role: "", email: "", name: "", firstname: "" }
        if (name) {
            params = { ...params, name: name }
        }
        if (firstname) {
            params = { ...params, firstname: firstname }
        }
        if (email) {
            params = { ...params, email: email }
        }
        if (role) {
            params = { ...params, role: role }
        }

        const API_URL = Config.API_URL;
        fetch(API_URL + 'user/' + id + new URLSearchParams(params), {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.users = this.users.filter(user => user.id !== id);
            }
            )
            .catch(error => {
                console.error('Error:', error);
            }
            );
    }

}