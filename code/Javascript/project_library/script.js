/*const mylibrary=[];
function Book(title,author,pages,read){
    this.id=crypto.randomUUID()  //uses crypto api to generate unique id string (UUID v4)
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
}
function addBookToLibrary(title,author,pages,read){
    const newBook = new Book(title,author,pages,read)
    mylibrary.push(newBook)
}
addBookToLibrary("One Piece","Oda",1000,true)
console.log(mylibrary)

function displayBooks(){
    const container=document.getElementById("library")
    container.innerHTML=""  //this line removes everything inside the container
    //container is a variable that holds a DOM element
    // a container contains all the Books elements
    mylibrary.forEach(Book =>{
        const div=document.createElement("div") // and empty HTML element is created in memory
        
        div.innerHTML=`
        <h3>${Book.title}</h3>
        <p>${Book.author}</p>
        <p>${Book.pages} pages</p>
        <p>${Book.read ? "Read": "Not Read"}</p>
        <button onclick="removeBook('${Book.id}')">Remove</button>
        `
        container.appendChild(div)
    })
}
function removeBook(id) {
  const index = mylibrary.findIndex(Book => Book.id === id);
  mylibrary.splice(index, 1);
  displayBooks();
}

displayBooks()

document.getElementById("bookForm").addEventListener("submit",function(e)
// document is built in object that represents entire html webpage
//event listener is used to add a user action and wait for the action to take place
//submit is trigger and then the callback function runs
{
    e.preventDefault();
    const title=document.getElementById("title").value;
    const author=document.getElementById("author").value;
    const pages=document.getElementById("pages").value;
    const read=document.getElementById("read").checked;
    addBookToLibrary(title,author,pages,read);
    displayBooks();
})

//constructors don't provide safeguard
/*
const me ={
    name:"sina",
    talk() {
    return `Hello I am ${this.name}`
    }
}
const ben ={
    name="Ben",
    talk(){
    return `Hello I am ${this.name}`
    }

}
me.talk()
ben.talk()
*/
function personFactory(name)
{ 
    return {
        talk()
        {
            return `Hello I am ${name}`
        }
        }
    }
const me=personFactory("sina")
me.talk()