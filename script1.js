
let music = new Audio("music.mp3")
let z=0;
let n=0
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
alert('are you ready')
const boxes=document.querySelectorAll('.box')
boxes.forEach(box=>{
    box.addEventListener("click",fun);
   
   
})
let currentPlayer='x';
function fun()
{
    if(this.innerHTML!=="")
    return;
    this.innerHTML=currentPlayer
    audioTurn.play();
    z++;
    if (checkWin(currentPlayer)) {
        alert(currentPlayer + ' wins!');
      
        gameover.play();
        resetGame();
        return;
      }
    currentPlayer=currentPlayer ==='x'?'0':'x';
    if(z==9)
    {
        alert('no wins');
        gameover.play();
        resetGame();
    }
}
function checkWin(player)
{
    const playerbox=Array.from(boxes).filter(e=>
        e.innerHTML===player

)
    const winningCombos = [
        ['1st', '2nd', '3rd'],
        ['4th', '5th', '6th'],
        ['7th', '8th', '9th'],
        ['1st', '4th', '7th'],
        ['2nd', '5th', '8th'],
        ['3rd', '6th', '9th'],
        ['1st', '5th', '9th'],
        ['3rd', '5th', '7th']
      ];

      return winningCombos.some(combo=>
        combo.every(boxid=>
            playerbox.some(box1=>
                box1.id==boxid
            )
        )
      );
            }
function resetGame()
{
    boxes.forEach(e=>{
        e.innerHTML='';
    });
    currentPlayer='x';
    z=0;
}
let playBtn = document.querySelector('.play');
playBtn.addEventListener('click', function(){
    music.play();
});
let pauseBtn = document.querySelector('.pause');
pauseBtn.addEventListener('click', function(){
    music.pause();
});

