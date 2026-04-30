/*const greeting=(()=>{
    const greetingstr='hello'
    const farewellstr='bye bye'
    return greetingstr;
}) (); */
/*
function getcomputerchoice()
{
    let v=Math.floor(Math.random()*3)
    if(v===0)
        return "rock"
    else if(v===1)
        return "paper"
    else 
        return 'scissors'

}

 function gethumanhcoice(h){
    if(h==='rock')
        return 'rock'
    else if(h==='paper')
        return 'paper'
    else
        return 'scissors'
}

function playgame()
{
    let hscore=0
    let cscore=0
    function playround(hchoice,cchoice){
        const human=hchoice.toLowerCase()
        if(human===cchoice)
            return "draw"
        else if((human==="rock" && cchoice==="scissors") 
            ||(human==='paper' && cchoice==="rock")
            || (human==='scissors' && cchoice==="paper")){
                return hscore++;
                
            }
        else{
            return cscore++
            
    }}
    for(let i=0;i<5;i++)
    {
        let h=prompt("enter your choice: ")
        let hchoice=gethumanhcoice(h)
        let cchoice=getcomputerchoice()
        console.log("Human: ",hchoice)
        console.log("Computer: ",cchoice)
         playround(hchoice,cchoice)
    }
   
        if(hscore>cscore)
            console.log('Human wins')
        else
            console.log('computer wins')
}
playgame()

*/

function Player(name)
{
    this.name=name
}
//player1=new Player
//Object.getPrototypeOf(player1)===Player.prototype
Player.prototype.sayName=function(){
    console.log(this.name)
}

/*
//prototypal inheritance
Object.getPrototypeOf(Player.prototype)===Object.prototype  //fyi Object is a built in global constructor parent of Player
player1.valueOf()
player1.hasOwnProperty("valueOf")
console.log(Object.prototype.hasOwnProperty('valueOf'))
//hasOwnProperty? lets check
console.log(Object.prototype.hasOwnProperty('hasOwnProperty'))
*/
// inheriting
function Person(name,marker){
    this.name=name
    this.marker=marker
}
Person.prototype.getmarker=function(){
    console.log(this.marker)
}
Object.getPrototypeOf(Person.prototype)
Object.setPrototypeOf(Person.prototype,Player.prototype)
Object.getPrototypeOf(Person.prototype)
const person1=new Person('steve','x')
person1.sayName()


let twosum=function(nums,target)
{
    const n=nums.length
    for(i=0;i<n;i++)
    {
        for(j=1;j<n;j++)
        {
            if(nums[i]+nums[j]==target)
                return[i,j]
        }
    }
    return []
}
let palindrome=function(x){
    if(x<0)
        return false
    let original=x
    let reversed=0
    while(x>0)
    {
        let digits=x%10
        reversed=reversed*10+digits
        x=Math.floor(x/10)
    }
    return original===reversed
}

let romantoint=function(s)
{
    const map={I:1,V:5,X:10,L:50,C:100,D:500,M:1000}
    let total=0;
    for(i=0;i<s.length;i++)
    {
        const current=map[s[i]]
        const next=map[s[i+1]]
        if(next>current)
        {
            total-=current
        }
        else
            total+=current
    }
}