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
