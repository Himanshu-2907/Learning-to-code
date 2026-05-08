function mergesort(arr)
{
    if(arr.length<=1)
        return arr
    const mid=Math.floor(arr.lenght/2)
    const left=arr.slice(0,mid)
    const right=arr.slice(mid)
    const sortedleft=mergesort(left)
    const sortedright=mergesort(right)
    return merge(sortedleft,sortedright)
}
function merge(left,right){
    const result=[]
    let leftindex=0
    let rightindex=0
    while(leftindex<left.length && rightindex<right.length)
    {
        if(left[leftindex]<right[rightindex])
        {
            result.push(left[leftindex])
            leftindex++
        }
        else{
            result.push(right[rightindex])
            rightindex++
        }
    }
    return result
}
console.log(merge([1,3,5],[2,4,6]))