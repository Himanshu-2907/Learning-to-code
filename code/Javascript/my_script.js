/*
console.log('hello world')
//object constructors
function Player(name,marker){    //constructor fn since used with new(creates obj links prototype call fn with obj and return obj)
    this.name=name
    this.marker=marker
    this.sayName=function(){     // adds a fn to each object
        console.log(this.name)
    }
}
const player1=new Player("steve",'X')
const player2=new Player("also steve","O")
player1.sayName();
Object.getPrototypeOf(player1)==Player.prototype   // checks if player1 linked to prototype
Player.prototype.sayHello = function() {   // add a method to prototype
    console.log("Hello I'm a player")
}
player1.sayHello()
/* .prototype for determinig new object's instance set to when fn 
called with new
 not for accessing an object prototype



//prototypal inheritance
Object.getPrototypeOf(Player.prototype)===Object.prototype
// plyer.prototype is inhereting for object.prototype
console.log(player1.valueOf())
console.log(player1.hasOwnProperty("ValueOf"))
console.log(Object.prototype.hasOwnProperty("valueOf"))
console.log(Object.prototype.hasOwnProperty("hasOwnProperty"))
/* refer to (prototype chain) https://raw.githubuser
 content.com/TheOdinProject/curriculum/cffc
 199a8cfbfcd61160b00c4cf61e1d6b
 b6ff2e/javascript/organizing_your_j
avascript_code/object_constructors/imgs/00.png
the entire chain is 
player1
  ↓
Player.prototype
  ↓
Object.prototype
  ↓
null


// inheritance in action from player above
function Person(name){
    this.name=name
}
Person.prototype.sayName=function(){
    console.log(`Hello, I'm ${this.name}`)
}
Player.prototype.getMarker=function(){
    console.log(`My marker is ${this.marker}`)
}
Object.getPrototypeOf(Player.prototype);
Object.setPrototypeOf(Player.prototype, Person.prototype)
//player inherits form person
Object.getPrototypeOf(Player.prototype) //return Person.prototype
const player3=new Player("Ryan","X")
const player4=new Player("not Steve","Y")

player3.sayName()
player4.sayName()
player3.getMarker()
player4.getMarker()

//constructors don't provide safeguard
/*
const me ={
    name:"sina",
    talk() {
    return `Hello I am ${this.name}`
    }
}
const ben ={
    name="Ben",
    talk(){
    return `Hello I am ${this.name}`
    }

}
me.talk()
ben.talk()

function personFactory(name)
{ 
    return {
        talk()
        {
            return `Hello I am ${name}`
        }
        }
    }
const me=personFactory("sina")
me.talk()

// factoty functions :- it creates and returns an object
function User(name){
    this.name=name
}
function createUser(name){
    const discordname="@"+name
    let reputation=0; //this is the key
    const getReputation=()=> reputation;   //these are closures
    const giveReputation=()=> {reputation++};  //these are closure
    //thesee are closures because even after createuser scope is finisdhed they can use reputation
    return {name,discordname,getReputation,giveReputation}
}
const josh=createUser("josh")
josh.giveReputation()
josh.getReputation()
console.log({
    discordname:josh.discordname,
    reputation:josh.getReputation()
});

//Immediately inoked function expression (IIFE)

() =>  console.log("foo");

//ES6 modules released in 2015 introduced some new features including the concept of models
// which are a set of syntax for importing and exporting code 
//between different javascript files


import {greeting,farewell} from "./15-19.js"
console.log(greeting,farewell)
// so export a function of variable from 15-19.js file, import in this file and change the html code from 
//<script src="script.js"></script>    to   <script type="module" src="script.js"></script>
*/

//22 April
//Single Responsibility

class Car{
    constructor(make,model,fuel){
        this.make=make
        this.model=model
        this.fuel=fuel
    }
    start(){
        if(this.fuel>0)
        {
            console.log(`The car ${this.make} ${this.model} started`)
            return true
        }
        console.log(`The car ${this.make} ${this.model} failed to start`)
        return false
    }
    errorLog(message)
    {
        console.log(message)
    }
}
const car1=new Car('toyota','supra',50)
car1.start()