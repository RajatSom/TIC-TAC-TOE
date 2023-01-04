let gameover=new Audio("gameover.mp3.wav");
let ting=new Audio("ting.mp3");
let turn='X';
let isgameover=false;
const changeTurn = () => {
    return turn==='X'?'0':'X';
}
const checkwin = () => {
    let textbox=document.getElementsByClassName('textbox');
    let wins=[
        [0,1,2,2.5,5,0],
        [3,4,5,2.5,15,0],
        [6,7,8,2.5,25,0],
        [0,3,6,-7.5,15,90],
        [1,4,7,2.5,15,90],
        [2,5,8,12.5,15,90],
        [0,4,8,2.5,15,45],
        [2,4,6,2.5,15,135],
    ]
    wins.forEach(e=>{
        if(textbox[e[0]].innerText === textbox[e[1]].innerText && textbox[e[2]].innerText === textbox[e[1]].innerText && textbox[e[0]].innerText !==""){
            document.querySelector('.info').innerText=textbox[e[0]].innerText+' Won';
            isgameover=true;
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='120px';
           document.querySelector('.line').style.transform=`translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
                document.querySelector('.line').style.width='25vw';
        }  
    })
}
let boxes=document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let textbox = element.querySelector('.textbox');
    element.addEventListener('click',()=>{
        if(textbox.innerText==='' && isgameover===false){
            textbox.innerText=turn;
            turn=changeTurn();
            ting.play();
            checkwin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText='Turn for '+ turn;
            }
        }
    })
});
const btn=document.getElementById('reset');
btn.addEventListener('click',()=>{
    let boxes=document.querySelectorAll('.textbox');
    Array.from(boxes).forEach(element =>{
        element.innerText="";
    });
    turn='X';
    isgameover=false;
    document.querySelector('.line').style.width='0vw';
    document.getElementsByClassName("info")[0].innerText='Turn for '+ turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='0px';
});