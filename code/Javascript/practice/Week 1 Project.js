const arr=[
    {id:1,city:'Ahmd',type:'apt',availibility:'false',price: 450000},
    {id:2,city:'Blr',type:'flat',availibility:'true',price:1200000},
    {id:3,city:'Blr',type:'flat',availibility:'false',price:860000},
    {id:4,city:'Ahmd',type:'apt',availibility:'true',price:2300000},
    {id:5,city:'Blr',type:'flat',availibility:'false',price:3720000},
    {id:6,city:'Ahmd',type:'apt',availibility:'true',price:2200000}, 
    {id:7,city:'Blr',type:'flat',availibility:'true',price:4200000},
    {id:8,city:'Surat',type:'apt',availibility:'true',price:7600000},
    {id:9,city:'Blr',type:'flat',availibility:'false',price:3500000},
    {id:10,city:'Surat',type:'apt',availibility:'true',price:233000},
    {id:11,city:'Blr',type:'flat',availibility:'false',price:8600000},
    {id:12,city:'Blr',type:'apt',availibility:'true',price:9700000}   
]
function filterByCity(arr1,city)
{
    return arr1.filter(arr=>arr.city===city)
}
console.log(filterByCity(arr,'Blr'))

function filterByBudget(arr1,maxPrice)
{
    return arr1.filter(arr=>arr.price<=maxPrice)
}
console.log(filterByBudget(arr,7600000))