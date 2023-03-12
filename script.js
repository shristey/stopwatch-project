var seconds = 00;
var tens = 00;
var outputSecond=document.getElementById('second');
var outputTens=document.getElementById('tens');
var buttonStart=document.getElementById('btnstart');
var buttonStop=document.getElementById('btnstop');
var buttonReset=document.getElementById('btnreset');
var Interval;

buttonStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval=setInterval(startTime, 10);
});

buttonStop.addEventListener('click', () => {
    clearInterval(Interval);
});

buttonReset.addEventListener('click', () => {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    outputSecond.innerHTML = seconds;
    outputTens.innerHTML = tens;
});

function startTime(){
    tens++;
    if(tens <= 9){
        outputTens.innerHTML = "0" + tens;
    }

    if(tens > 9){
        outputTens.innerHTML = tens;
    }

    if(tens > 99){
        seconds++;
        outputSecond.innerHTML = "0" + seconds;
        tens = 0;
        outputTens.innerHTML = "0" + tens;
    }

    if(seconds > 9){
        outputSecond.innerHTML = seconds;
    }


}