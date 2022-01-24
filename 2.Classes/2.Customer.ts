class Customer2 {
    firstName: string;
    lastName: string;
    constructor(
        firstName: string,
        lastName: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let customer2 = new Customer2("satya", "ganesh")
console.log(customer2.firstName);
console.log(customer2.lastName);