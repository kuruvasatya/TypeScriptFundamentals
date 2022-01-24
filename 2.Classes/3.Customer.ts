class Customer3{
    private _firstName: string;
    private _lastName: string;

    get firstName(): string{
        console.log("first Name getter is called");
        return this._firstName;
    }

    set firstName(value: string) 
    {
        console.log("first Name setter is called");
        this._firstName = value;
    }

    get lastName(): string {
        console.log("last Name getter is called");
        return this._lastName;
    }
    
    set lastName(value: string) {
        console.log("last Name setter is called");
        this._lastName = value;
    }
}

let customer3 = new Customer3();
customer3.firstName = "satya";
console.log(customer3.firstName);