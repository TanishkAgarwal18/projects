let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let btns=["yellow","red","purple","green"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    }
});
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");

    },500);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");

    },500);
}
function levelup(){
    userseq=[];
     level++;
     h2.innerText=`Level ${level}`;
     let ri=Math.floor(Math.random()*4);
     let rc= btns[ri];
     let rb= document.querySelector(`#${rc}`);
     console.log(ri);
     console.log(rc);
     console.log(rb);
     gameseq.push(rc);
     console.log(gameseq);
     gameflash(rb);
}
function checkans(idx){
    //console.log("currlevel:",level);
    //let idx=level-1;
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup(),1000);
        }
    }else{
        h2.innerHTML=`Game over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnpress(){
    console.log(this);
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);
    checkans(userseq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}
