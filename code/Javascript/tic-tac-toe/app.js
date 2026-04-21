const boxes=Array.from(document.getElementsByClassName('box'));
console.log(boxes);
const playText=document.getElementById('playText')
const restartBtn=document.getElementById('restartBtn')
const spaces=[];
const text_O="O"
const text_X="X"
let currentPlayer

const drawBoard=()=>
{
    boxes.forEach((box,index)=>
    {
        let styleStr="";
        if(index<3)   //for adding border at bottom of top elements to define a grid
        {
            styleStr+=`border-bottom:3px solid var(--purple);`;
        }
        if(index%3===0)   //for adding border to elements on right side of box
        {
            styleStr+=`border-right:3px solid var(--purple);`;

        }
        if(index%3===2)  //for adding border to elements on left side of box
        {
            styleStr+=`border-left:3px solid var(--purple);`;

        }
        if(index>5)  //for adding border at top of bottom elements to define a grid
        {
            styleStr+=`border-top:3px solid var(--purple);`;
        }
        box.style=styleStr;
        box.addEventListener('click',boxclicked)
    });
}
const boxclicked=(e)=>
{
    const id=e.target.id
    console.log(id)
    if(!spaces[id]){
        spaces[id]=currentPlayer
        e.target.innerText=currentPlayer
        if(playerWon())
        {
            playText.innerText=`${currentPlayer} has won`
        }
        currentPlayer=currentPlayer=== text_O ? text_X : text_O
    }
}
const playerWon=()=>
{
    if(spaces[0]==currentPlayer)
    {
        if(spaces[1]==currentPlayer && spaces[2]==currentPlayer){
            console.log(`${currentPlayer} wins up top`)
            return true
        }
        if(spaces[3]==currentPlayer && spaces[6]==currentPlayer){
            console.log(`${currentPlayer} wins on the left`)
            return true
        }
        if(spaces[4]==currentPlayer && spaces[8]==currentPlayer){
            console.log(`${currentPlayer} wins diagonally`)
            return true
        }
    }
    if(spaces[8]==currentPlayer)
    {
        if(spaces[5]==currentPlayer && spaces[2]==currentPlayer){
            console.log(`${currentPlayer} wins on the right`)
            return true
        }
        if(spaces[7]==currentPlayer && spaces[6]==currentPlayer){
            console.log(`${currentPlayer} wins on the bottom`)
            return true
        }
    }
    if(spaces[4]==currentPlayer)
    {
        if(spaces[3]==currentPlayer && spaces[5]==currentPlayer){
            console.log(`${currentPlayer} wins horizontally in the middle`)
            return true
        }
        if(spaces[1]==currentPlayer && spaces[7]==currentPlayer){
            console.log(`${currentPlayer} wins vertically in the middle`)
            return true
        }
    }
}
const restart=()=>
    {
        spaces.forEach((space,index)=>{
            spaces[index]=null
        })
        boxes.forEach(box=>{
            box.innerText=''
        })
        playText.innerText="Let's Play!"
        currentPlayer=text_O
    }
restartBtn.addEventListener('click',restart)
restart()
drawBoard()

