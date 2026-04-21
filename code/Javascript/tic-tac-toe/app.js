const boxes=Array.from(document.getElementsByClassName('box'));
console.log(boxes);

const spaces=[null,null,null,null,null,null,null,null,null];
const text_O="O"
const text_X="X"
let currentPlayer=text_O

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
        currentPlayer=currentPlayer=== text_O ? text_X : text_O
    }
}
drawBoard();

