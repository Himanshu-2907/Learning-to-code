/* function oddnolessthan10(){
    let currentno=1
    while(currentno<10)
    {
        if(currentno%2!=0)
            console.log(currentno)
        currentno+=1
    }
    
}
oddnolessthan10() */
/*
function twosum(nums,target){
    const num=nums.length
    for(let i=0;i<num;i++)
    {
        for(let j=0;j<num;j++)
        {
            if(nums[i]+nums[j]===9)
            {
                return[i,j]
            }
        }
    }
    return[]
}
nums=[2,5,4,5]
console.log(twosum(nums,9))
*/
/*
function vp(s)
{
    stack=[]
    map={
        ')':'(',
        '}':'{',
        ']':'['
    }
    for(let char of s)
    {
        if(char==='(' || char==='{' || char==='[')
        {
            stack.push(char)
        }
        else
        {
            if(stack.pop()!==map[char])   // lets say ')' is the char in stack.pop()!== map[char] // then char maps to '(' in map ,checks if ')'!== '(' 
            {                             // cond true return false
                return false              // returns false if bracket mismatch means
                                          // the current char does not have a corresponding opening braces
            }
        }
    }
    return stack.length===0
}
console.log(vp('{()}'))
*/
/*
function reversestring(s)
{
    let left=0
    let right=s.length-1
    while(left<right)
    {
        let temp=s[left]
        s[left]=s[right]
        s[right]=temp
        left++
        right--
    }
    console.log(s)
    return s
}
console.log(reversestring(['h','e','l','l','o']))
*/
/*
const users=[{id:1,name:'himanshu'},
    {id:2,name:'rahul'}
]
const user=users.find(u=>u.id===2)
console.log(user)

const prod=[
    {name:'geag',inStock:true},
    {name:'aefae',inStock:false}
]
const available=prod.filter(pr=>pr.inStock===false)
console.log(available)
const total=nums.reduce((acc,n)=>acc+n,0)
*/
const addtax=(price)=>price+price*0.18
console.log(addtax(500))
function formatPrice(price)
{
    return "Rs "+price.toLocaleString("en-IN")
}
const listings = [
  { id: 1, city: "Surat",    price: 4500000, type: "apartment", available: true  },
  { id: 2, city: "Ahmedabad",price: 7200000, type: "villa",     available: false },
  { id: 3, city: "Surat",    price: 3100000, type: "apartment", available: true  },
  { id: 4, city: "Mumbai",   price: 12000000,type: "penthouse", available: true  },
  { id: 5, city: "Ahmedabad",price: 5400000, type: "villa",     available: true  },
];
const withlabels=listings.map(listing=>({...listing,label: formatPrice(listing.price)}))
console.log(withlabels[0].label)
const luxurious=listings.filter(listing=>listing.price>5500000)
console.log(luxurious)
const propfind=listings.find(prop=>prop.price>5500000)
console.log(propfind.id)
const ahmd=listings.filter(listing=>listing.city==="Ahmedabad")
console.log(ahmd)
const idfour=listings.find(listing=> listing.id===4)
console.log(idfour)
const filtred=listings.filter(listing=>listing.available===true) 
.reduce((sum,listing)=>sum+listing.price,0)
console.log(filtred)
const arr=(listings.map(listing1=>listing1.type + " in "+ listing1.city + " - " + " Rs " + listing1.price))
arr.forEach(arr=>console.log(arr))
const property={
    id:101,
    title:'3BHK Apartment',
    city:'surat',
    price:'450000',
    agent:
    {
        name:'Riya',
        phone:'23423342423'

    },
    tags:['corner unit']
}
const updateprop={...property,price:500000}
console.log(updateprop.price)

function makeViewingTracker(name)
{
    let count=0
    return function incCount()
    { 
        count++
        console.log(name + "has had " +count+" viewings")
    }
}
const seaViewTracker=makeViewingTracker("Seaview Villa")
const sunriseAptTracker=makeViewingTracker("Sunrise Apartment")

seaViewTracker()
seaViewTracker()
sunriseAptTracker()
sunriseAptTracker()

