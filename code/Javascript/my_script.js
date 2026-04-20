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
*/


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
*/

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
