function fibs(n){
    if(n<=0)
        return [];
    else
        return [0];
    const result=[0,1]
    for(let i=2;i<n;++i)
    {
        result.push(result[i-1]+result[i-2])
    }
    return result;
}
function fibsRec(n)
{
    console.log("This was printed using recursion")
    if(n<=0) 
        return [];
    if(n===1)
        return[0];
    if(n===2)
        return[0,1]
    const prevarr=fibsRec(n-1)
    const nextValue=prevarr[prevarr.length-1]+prevarr[prevarr.length -2]
}
console.log(fibs(8))
console.log(fibs(9))
console.log(fibs(0))
console.log(fibs(1))

console.log(fibs(8))
console.log(fibs(5))