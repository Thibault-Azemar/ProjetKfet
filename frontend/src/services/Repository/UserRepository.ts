import Config from '../../config';
import User from '../Crontroller/UserController';

export default class UserRepository {

    public getUsers(): Promise<User[]> {
        const API_URL = Config.API_URL;
        const users: User[] = [];
        return fetch(API_URL + 'user/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data =>
                data.forEach((data: any) => {
                    const user = new User(data.id, data.name, data.firstname, data.email, data.role);
                    users.push(user);
                })
            )
            .then(() => {
                return Promise.resolve(users);
            }
            )
            .catch(error => {
                console.error('Error:', error);
                return Promise.reject(error);
            }
            );
    }

    public addUser(name: string, firstname: string, email: string, password: string, role: string): Promise<User> {
        const API_URL = Config.API_URL;
        const CryptoJS = require("crypto-js")
        const passhash = CryptoJS.AES.encrypt(password, Config.AES_KEY).toString();
        const params = { role: role, email: email, name: name, firstname: firstname, password: passhash }
        return fetch(API_URL + 'user/add?' + new URLSearchParams(params), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                const user = new User(data.id, name, firstname, email, role);
                return Promise.resolve(user);
            }
            )
            .catch(error => {
                console.error('Error:', error);
                return Promise.reject(error);
            }
            );
    }

    public deleteUser(id: string): Promise<number> {
        const API_URL = Config.API_URL;
        return fetch(API_URL + 'user/' + id, {

            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                return 200
            }
            )
            .catch(error => {
                console.error('Error:', error);
                return 500;
            }
            );
    }
    public updateUser(id: string, name?: string, firstname?: string, email?: string, password?: string, role?: string): Promise<number> {
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
        return fetch(API_URL + 'user/' + id + new URLSearchParams(params), {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                return 200
            }
            )
            .catch(error => {
                console.error('Error:', error);
                return 500;
            }
            );
    }

}
