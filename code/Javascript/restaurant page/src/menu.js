function createMenuPage(){
    const menuDiv=document.createElement('div')
    menuDiv.classList.add('menu-content')
    const title =document.createElement('h1')
    title.textContent='Our Name'
    title.classList.add('menu-title')
     const menuItems = [
        { name: "Margherita Pizza", description: "Fresh tomatoes, mozzarella, basil", price: "$14.99" },
        { name: "Spaghetti Carbonara", description: "Eggs, pecorino cheese, pancetta", price: "$16.99" },
        { name: "Caesar Salad", description: "Romaine lettuce, parmesan, croutons", price: "$9.99" },
        { name: "Tiramisu", description: "Coffee-soaked ladyfingers, mascarpone", price: "$7.99" },
        { name: "Espresso", description: "Rich Italian coffee", price: "$3.50" }
    ]
    const menuList=document.createElement('div')
    menuList.classList.add('menu-items')
    menuItems.forEach(item=>
    {
        const itemCard=document.createElement('div')
        itemCard.classList.add('menu-card')
        const itemName=document.createElement('h3')
        itemCard.textContent=item.name
        const itemDesc=document.createElement('p')
        itemCard.textContent=item.description
        const itemPrice=document.createElement('spane')
        itemPrice.textContent=item.price
        itemCard.appendChild(itemName)
        itemCard.appendChild(itemDesc)
        itemCard.appendChild(itemPrice)
        menuList.appendChild(itemCard)
    }
    )
    menuDiv.appendChild(title)
    menuDiv.appendChild(menuList)
    return menuDiv

}
export default createMenuPage