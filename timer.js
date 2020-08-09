
let min=00;
let sec=00;
let minhead=document.getElementById("min");
let sechead=document.getElementById("sec");
function timer(){
        sec++;
        sechead.innerHTML=sec;
    
 if(sec>59){
        min++;
        sec=00;
        minhead.innerHTML=min;
    }
}

let interval=setInterval(timer,1000);
