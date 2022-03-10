'user strict'
// class: template
// object: instance of class

//class declarations
class Person{
    //constructor 
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    //method
    speak(){
        console.log(`${this.name} hello!`)
    }
}

//getter & setter
class User{

    //constructor 
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //? _age = age?
    get age(){
        return this._age;
    }

    set age(value){
        this._age = value < 0 ? 0 : value; 
    }
    
}
const user1 = new User('Job', -1);
console.log(user1.age)

//public private fields
class Expriment{
    publicField = 2;
    #privateField = 0
}
const ex = new Expriment();
console.log(ex.publicField)
console.log(ex.privateField)

//static propeties and method: 클래스 자체에 존재 

//classfunction 을 많이 사용 