class Person {
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Instance Method
    print() {
        return `FirstName : ${this.firstName}
                LastName : ${this.lastName}
                Age : ${this.age}`;
    }

    // Static Method
    static getData(){
        console.log('From Parent');
    }
}
class Customer extends Person{
    constructor(firstName,lastName,age,location){
        super(firstName,lastName,age);
        this.location = location;
    }

    // Instance Method
    print() {
        return `FirstName : ${this.firstName}
                LastName : ${this.lastName}
                Age : ${this.age}
                Location : ${this.location}`;
    }

    // static
    static getData(){
        console.log('From Child');
    }
}
let customer1 = new Customer('John','Wilson',35,'USA');
console.log(customer1.print());
Customer.getData();
