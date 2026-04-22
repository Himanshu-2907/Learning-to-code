function createHomePage(){
    const homeDiv=document.createElement('di')
    homeDiv.classList.add('home-content')
    const headline=document.createElement('h1')
    headline.textContent='Welcome to the Flavor Inventory'
    headline.classList.add('headline')
    const subheadline=document.createElement('p')
    subheadline.textContent="Where every bit tells a story"
    subheadline.classList.add('subheadline')
    const description=document.createElement('p')
    description.textContent=`Since 2010, Flavor Haven has been serving the finest
    dishes made from locally sourced ingredients. Our chefs combine traditional recipes with
    modern techniques to create an unforgettable dining experience.`;
    description.classList.add('description')
    const hoursTitle=document.createElement('h2')
    hoursTitle.textContent='Hours'
    const hoursList=document.createElement('u1')
    hoursList.createList.add('hours-list')
    const hours=[
        'Monday-Thursday: 11am-10pm',
        'Friday-Saturday: 11am-11pm',
        'Sunday; 12pm -8pm'
    ]
    hours.forEach(hour=>
    {
        const li=document.createElement('li')
        li.textContent=hour
        hoursList.appendChild(li)
    })
    const locationTitle=document.createElement('h2')
    locationTitle.textContent='Location'
    const locationText=document.createElement('p')
    location.textContent='123 Foodie Street, Culinary District, Food City, FC 1234'
    locationText.classList.add('location')
}