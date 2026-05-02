function mergesort(arr)
{
    if(arr.length<=1)
        return arr;
    const mid=Math.floor(arr.length/2)
    const left=arr.slice(0,mid)
    const right=arr.slice(mid)
    const sortedleft=mergesort(left)
    const sortedright=mergesort(right)
    return merge(sortedleft,sortedright)
}
function merge(left,right)
{
    const result=[];
    let leftindex=0
    let rightindex=0
    while(leftindex<left.length && rightindex<right.length)
    {
        if(left[leftindex]<right[rightindex])
        {
            result.push(left[leftindex])
            leftindex++
        }
        else
        {
            result.push(right[rightindex])
            rightindex++
        }
    }
    while(leftindex<left.length)
    {
        result.push(left[leftindex])
        leftindex++
    }
    while(rightindex<right.length)
    {
        result.push(right[rightindex])
        rightindex++
    }
    return result
}
console.log(mergesort([]))
console.log(mergesort([73]))
console.log(mergesort([1,2,3,4,5]))
console.log(mergesort([21,33,234,525,46,253,42,23,299]))
console.log(merge([1,2,3]))