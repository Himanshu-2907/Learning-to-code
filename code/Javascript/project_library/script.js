const library=[];
function book(title,author,pages,read){
    this.id=crypto.randomUUID()  //uses crypto api to generate unique id string (UUID v4)
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
}
function addBookToLibrary(title,author,pages,read){
    const book = new book(title,author,pages,read)
    mylibrary.push(book)
}
addBookToLibrary("One Piece","Oda",1000,true)
console.log(mylibrary)

function displaybooks(){
    const container=document.getElementById("library")
    container.innerHTML=""  //this line removes everything inside the container
    //container is a variable that holds a DOM element
    // a container contains all the books elements
    mylibrary.forEach(book =>{
        const div=document.createElement("div") // and empty HTML element is created in memory
        
        div.innerHTML=`
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <p>${book.pages} pages</p>
        <p>${book.read ? "Read": "Not Read"}</p>
        `
        container.appendChild(div)
    })
}

displaybooks()

document.getElementById("bookform").addEventListener("submit",function(e)
// document is built in object that represents entire html webpage
//event listener is used to add a user action and wait for the action to take place
//submit is trigger and then the callback function runs
{
    const title=document.getElementById("title").value;
    const author=document.getElementById("author").value;
    const pages=document.getElementById("pages").value;
    const read=document.getElementById("read").checked;
    addBookToLibrary(title,author,pages,read);
    displaybooks();
})