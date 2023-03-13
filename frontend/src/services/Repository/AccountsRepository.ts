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
}