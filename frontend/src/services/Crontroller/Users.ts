import User from './User';
import Config from './Config';

export default class Users{
    users: User[] =[]

public constructor(){
    const API_URL = Config.API_URL;
    fetch(API_URL+'user/all', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => 
            data.forEach((data:any) => {
                console.log(data)
                const user=new User(data.id,data.name,data.password,data.role);
                this.users.push(user);
            })
            )
        .catch(error => {
            console.error('Error:', error);
        }
        );
}

}