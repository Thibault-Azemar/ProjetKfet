import Customer from "../model/CustomerModel";
import Group from "../model/GroupModel";
import Config from '../../config';

export default class AccountsRepository {

    public getAccounts(): Promise<Group[]> {
        const API_URL = Config.API_URL;
        const customers: Group[] = [];
        return fetch(API_URL + 'group/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                data.forEach((data: any) => {
                    const group = new Group(data.name, data.id);
                    data.customers.forEach((data: any) => {
                        const customer = new Customer(data.name, data.firstname, data.money, data.id, group.name);
                        console.log(customer)
                        group.addCustomer(customer);
                    })
                    customers.push(group);
                })
                customers.sort((a, b) => a.name.localeCompare(b.name));
                return Promise.resolve(customers);
            }
            )
            .catch(error => {
                console.error('Error:', error);
                return Promise.reject(error);
            }
            );
    }
    public addAccount(name: string, firstname: string, money: number, group: string): Promise<Customer> {
        const API_URL = Config.API_URL;
        const moneyStr = money.toString();
        const params = { name: name, firstname: firstname, money: moneyStr, idgroup: group }
        return fetch(API_URL + 'customer/add?' + new URLSearchParams(params), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                const customer = new Customer(name, firstname, money, data.id, group);
                return Promise.resolve(customer);
            }
            )
            .catch(error => {
                console.error('Error:', error);
                return Promise.reject(error);
            }
            );
    }
    public deleteAccount(id: string): Promise<number> {
        const API_URL = Config.API_URL;
        const params = { id: id }
        return fetch(API_URL + 'customer?' + new URLSearchParams(params), {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => {
                if (response.status == 200) {
                    return Promise.resolve(200);
                }
                else {
                    return Promise.reject(500);
                }
            }
            );
    }
    public updateAccount(id: string, name: string, firstname: string, money: number, group: string): Promise<number> {
        console.log("updateAccount")
        const API_URL = Config.API_URL;
        const moneyStr = money.toString();
        const params = { id: id, name: name, firstname: firstname, money: moneyStr, group: group }
        console.log(params)
        return fetch(API_URL + 'customer?' + new URLSearchParams(params), {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                return Promise.resolve(200);
            }
            )
            .catch(error => {
                console.error('Error:', error);
                return Promise.reject(error);
            }
            );
    }
    public updateSolde(id: string, money: number): Promise<Customer> {
        const API_URL = Config.API_URL;
        const moneyStr = money.toString();
        const params = { id: id, money: moneyStr }
        return fetch(API_URL + 'customer?' + new URLSearchParams(params), {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                const customer = new Customer(data.name, data.firstname, money, data.id, data.group);
                return Promise.resolve(customer);
            }
            )
            .catch(error => {
                console.error('Error:', error);
                return Promise.reject(error);
            }
            );
    }

    public getGroups(): Promise<Group[]> {
        const API_URL = Config.API_URL;
        const groups: Group[] = [];
        return fetch(API_URL + 'group/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                data.forEach((data: any) => {
                    const group = new Group(data.name, data.id);
                    groups.push(group);
                })
                groups.sort()
                return Promise.resolve(groups);
            }
            )
            .catch(error => {
                console.error('Error:', error);
                return Promise.reject(error);
            }
            );
    }
    public addGroup(name: string): Promise<Group> {
        const API_URL = Config.API_URL;
        const params = { name: name }
        return fetch(API_URL + 'group/add?' + new URLSearchParams(params), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                const group = new Group(name, data.id);
                return Promise.resolve(group);
            }
            )
            .catch(error => {
                console.error('Error:', error);
                return Promise.reject(error);
            }
            );
    }
    public deleteGroup(id: string): Promise<number> {
        const API_URL = Config.API_URL;
        const params = { id: id }
        return fetch(API_URL + 'group?' + new URLSearchParams(params), {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => {
                if (response.status == 200) {
                    return Promise.resolve(200);
                }
                else {
                    return Promise.reject(500);
                }
            }
            );
    }
    public editGroup(id: string, name: string): Promise<number> {
        const API_URL = Config.API_URL;
        const params = { id: id, name: name }
        return fetch(API_URL + 'group?' + new URLSearchParams(params), {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => {
                if (response.status == 200) {
                    return Promise.resolve(200);
                }
                else {
                    return Promise.reject(500);
                }
            }
            );
    }


}