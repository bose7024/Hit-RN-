var timer = 60;
var score = 0;
var pinrn

function scorebadhao() {
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}
function hitrn() {
   pinrn =Math.floor(Math.random()*10)
   document.querySelector("#hitval").textContent=pinrn;
}
function bubblebanao(){
var clutter = "";

for (let index = 1; index <= 114; index++) {
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
    
}
document.querySelector("#pbtm").innerHTML=clutter;
}
function runtimer(){
    setInterval(() => {
        if (timer>0) {
           timer--;
        document.querySelector("#timerval").textContent=timer;  
        }
        else{
            clearInterval(timer);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1><h1>${score}</h1>`

        }
       
    }, 1000);
}
document.querySelector("#pbtm").addEventListener("click",function (dets) {
    var clickednum = Number(dets.target.textContent);
    if (clickednum===pinrn) {
        scorebadhao();
        bubblebanao();
        hitrn();
    }
})


runtimer();
bubblebanao();
hitrn();
