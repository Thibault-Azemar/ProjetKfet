

export default class User {
    id: number;
    username: string;
    password: string;
    role: string;

    /**
    * constructor
    */
    public constructor(id:number,username:string,password:string,role:string="USER") {
    
        this.id=id
        this.username=username
        this.password=password
        this.role=role
    
    }
    
}
