function makeBubble() {
    var clutter = "";
    for (let i = 1; i <= 133; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector('#pbtm').innerHTML = clutter;
}
var hitrn=0;
function getNewHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector('#hitValue').textContent=hitrn;
}
var timer=20;
function runTimer(){
    setInterval(function(){
        if(timer!=0){
            timer--;
            document.querySelector('#timer').textContent=timer;
        }
        else{
            document.querySelector("#pbtm").innerHTML="";
            document.querySelector("#over").style.opacity=1;
            document.querySelector("#scoreCheck").style.opacity=1;
        }
    },1000);
    
}
var score=0;
function incScore(){
    score+=10;
    document.querySelector('#scoreVal').textContent=score;
    document.querySelector("#scoreCheck").innerHTML=`Your Score is ${score}`;
}

document.querySelector('#pbtm').addEventListener('click',function(dets){
    var clickedNum=Number(dets.target.textContent);
    if(clickedNum===hitrn){
        incScore();
        makeBubble();
        getNewHit();
    }
});

makeBubble();
runTimer();
getNewHit();

