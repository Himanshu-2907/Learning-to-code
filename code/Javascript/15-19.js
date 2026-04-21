let firstname='John';
let lastname='Doe';
console.log(firstname)
console.log(lastname)
let age=30;
console.log(age)
age=54
console.log(age);
const pi=3.14;
console.log(pi);
//pi =10;
console.log((4+6+9)/77);
const max=57;
const actual= max-13;
const percentage= actual/max;
console.log(percentage);
let text = "HELLO WORLD";
let char = text.charAt(0);
console.log(char);
console.log(`V=${char}`)
console.error('erorr')
//code to collect user input-> first npm init -y then npm install prompt -sync then code->
const prompt=require("prompt-sync")();
//const v=prompt("type something:");
//console.log(v);

//comparison operators
//== loose equality operator
//=== strict equality operator (use this one typically)
console.log(undefined==="")
console.log(undefined===null)
console.log(undefined==null)
console.log("hello"|| false)
// let and const are blocked data types which means if defined inside a function or block it cannot be accessed outside of it
//condition
const cond=2>3 ? "hello":false
console.log(cond);

//array
arr=[1,2,3,4,5];
arr2=new Array(5);
console.log(arr2);
console.log(arr2[2]);
const arr3=Array.from("hello")
console.log(arr3);
arr3[0]="y"
console.log(arr3)//alert(2>1);
arr3[arr3.length+5]="test"
console.log(arr3)
arr3.push(4)
console.log(arr3)
arr3.shift()
arr3.unshift("new")
console.log(arr3)
console.log(arr3.indexOf("l"))
console.log(arr3.lastIndexOf("l"))
console.log(arr3.includes("l"))
const arr4=arr3.concat(arr2)
console.log(arr4)
const arr5=arr3.slice(1,3) //form  1 to 3 but not including 3
console.log(arr5)
const arr6=arr3.splice(1,3) //from 1 upto 3 elements if it is (1,1) then prints only 1 elments from 1
console.log(arr6)   
// learning if else
function getComputerChoice(n){
    const v=Math.floor(Math.random()*n);
    if (v===0)
        return "rock";
    else if(v===1)
        return "paper";
    else 
        return "scissors";
   // return Math.floor(Math.random()*3);
}
console.log(getComputerChoice(3))

function getHumanChoice(){
    if (h==="rock")
        return "rock";
    else if(h==="paper")
        return "paper";
    else 
        return "scissors";
}
//let h=prompt("Enter your choice: rock, paper or scissors")
/*console.log(getHumanChoice(h))
function playGame(){
let humanscore=0;
let globalscore=0;
    function playRound(humanChoice,computerChoice){
        const human=humanChoice.toLowerCase();
        if(human===compuetrChoice){
            console.log("Draw")}
        if((human==="rock" && compueterChoice==="Scissors") || 
        (human==="paper" && compueterChoice==="rock") || 
        (human==="scissors" && compueterChoice==="paper"))
        {   humanscore++;
            console.log( "You win!"+human+"beats"+computerChoice);
        }
        else{ globalscore++;
            console.log( "You lose!"+computerChoice+"beats"+human);
        }
    }
}
let str='himanshu'
for(let i in str){
    console.log(i)
}
for(let i of str){
    console.log(i)
}
let str2={
    name:'himanshu',
    age:22,
    salary:5000
}
for(let i in str2){
    console.log("key",i,"value",str2[i])
}
let obj={   // this is an object literal
    item:'paper',
    material:"wood"
}
console.log("The obj "+obj.item+" is made of "+obj.material)
let Specialstr=`This is a template`
let arrs=[1,2,3,4,5]
arrs.forEach(function addval(val){
    v=val+2;
    console.log(v)
})
let arr9=[1,2,3,4,5]
const output=arr9.reduce((res,curr)=>{
    return(res+curr)
});
console.log(output)
/*
const select=document.querySelector("select");
const para=document.querySelector("p");
select.addEventListener("change",setWeather);
function setWeather(){
    const choice=select.value;
    if(choice==="sunny")
        para.textContent="It is a nice and sunny day. Wear shorts";
    else if(choice==="rainy"){
        para.textContent="Rain is falling outside; take a rain coat and an umbrella";
    }
    else if(chioce==="snowing"){
        para.textContent="The snow is coming down, it is freezing! Best to stay with yo girl in the basement";
    }
    else if(choice==="overcast")
    {
        para.textContent="It isin't raining, but the sky is grey and gloomy, it could turn any minute";
    }
    else{
        para.textContent="";
    }
}
let cheese ="cheddar";
if(cheese)
{
    console.log("Yay! we got a hit less go")

}
else{
    console.log("No cheese")
}
let Shoppingdone=false;
let ChildAllowance;
if(Shoppingdone){
    childAllowance=10;
}
else{
    childAllowance=5;
}
switch (expression)
{
    case choice1:
        break;
    case choice2:
        break;
    default:
        break;
}
/*const select=document.querySelector("select");
const para=document.querySelector("p");
select.addEventListener("change",setWeather);
function setWeaether(){
 const choice=select.value;
 switch (choice):
 case "sunny":
    para.textContent='It is a nice and sunny day'

}  */


//the odin project object basics module
const obj1={'data':32}
const objcopy=obj1
console.log(obj1)
objcopy.data=43
console.log(objcopy)

function sumofTripledevens(array){
    let sum=0
    for(let i=0;i<array.length;i++)
    {
        if(array[i]%2==0)
        {
            const tripleEventNumber=array[i]*3;
            sum+=tripleEventNumber;
        }
    }
    return sum;
}
const ar=[1,2,3,4,5]
const oddnums=ar.reduce((total,currentItem)=>{ return total*currentItem;},1);
console.log(oddnums)
function filterRange(arr,a,b){
    return arr.filter(item=>(a<=item && item<=b));
}
let arrr=[5,3,7,1]
let filtered=filterRange(arrr,1,4)
console.log(filtered)
console.log(arrr)

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr12 = [ john, pete, mary ];


const arr123=['apple','banana','pear','kiwi']
console.log(arr123)
console.log(arr123.length)

const myobj={
    property: 'value',
    price: 77,
    "property price as per size": function(){}
}

console.log(myobj.property)
console.log(myobj["property price as per size"])

const car={
    make: "Volkswagen",
    model: "Golf",
    year: 2026,
    color: "blue",
    priceUSD: 40000,

  aplydisc:function(discountpercent)
  {
    const multiplier=1-discountpercent
    this.priceUSD*=multiplier;
  },
  summary()
  {
    return `${this.year} ${this.make} in ${this.color}`
  }
}

const reps={
    playerscore:0,
    computerscore:0,
    playround(playerchoice){

    },

getwinningplayer(){

},
reset(){

},
};
reps.playround('rock');
console.log(reps.playerscore)
reps.playround('rock')
console.log(reps.computerscore)
reps.playround('scissors')
console.log(reps.playerscore)
console.log(reps.getwinningplayer())
reps.reset()
console.log(reps.playerscore)
console.log(reps.computerscore)

export const greeting="Hello there"
export const farewell="Bye bye"