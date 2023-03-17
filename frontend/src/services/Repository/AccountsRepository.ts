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
                        group.addCustomer(customer);
                    })
                    customers.push(group);
                })
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
        const params = { name: name, firstname: firstname, money: moneyStr, group: group }
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
        return fetch(API_URL + 'customer/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                return Promise.resolve(data);
            }
            )
            .catch(error => {
                console.error('Error:', error);
                return Promise.reject(error);
            }
            );
    }
    public updateAccount(id: string, name: string, firstname: string, money: number, group: string): Promise<Customer> {
        const API_URL = Config.API_URL;
        const moneyStr = money.toString();
        const params = { name: name, firstname: firstname, money: moneyStr, group: group }
        return fetch(API_URL + 'customer/' + id + '?' + new URLSearchParams(params), {
            method: 'PUT',
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
    public updateSolde(id: string, money: number): Promise<Customer> {
        const API_URL = Config.API_URL;
        const moneyStr = money.toString();
        const params = { money: moneyStr }
        return fetch(API_URL + 'customer/' + id + '?' + new URLSearchParams(params), {
            method: 'PUT',
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
                return Promise.resolve(groups);
            }
            )
            .catch(error => {
                console.error('Error:', error);
                return Promise.reject(error);
            }
            );
    }
}