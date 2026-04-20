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
    container.innerHTML=""
    mylibrary.forEach(book =>{
        const div=document.createElement("div")
        
    })
}