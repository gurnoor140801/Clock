let timer = document.getElementById("timer")
let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let ampm = document.getElementById("ampm")
let startstop = document.getElementById("startstop")
let activeAlarm = false;
let alarm__time;

attach(hours,12);
attach(minutes,59);
attach__seconds(seconds);

let alarm__audio = new Audio("./5UBZP7Q-danger-alarm.mp3")
alarm__audio.loop = true;

window.setInterval(function(){
    let date = new Date();
    let currTime = date.toLocaleTimeString();
    if(activeAlarm == true && alarm__time == currTime){
        alarm__audio.play();
    }
    timer.innerHTML = currTime
},1000)


function attach(selector, n){

    for(let i = 0;i <= n; i++){
        // let append__child = document.createElement("option")
        // append__child.text = i;
        // append__child.value = i;
        // let tag = document.getElementById(selector);
       // tag.appendChild(append__child);

       selector.options[selector.options.length] = new Option(i);
    }

}

function attach__seconds(selector){

    for(let i = 0;i <= 59; i++){
           selector.options[selector.options.length] = new Option(i < 10 ? '0'+i:i);
    }

}

function btn__(){
    if(activeAlarm == false){
        hours.disabled = true;
        minutes.disabled = true;
        seconds.disabled = true;
        ampm.disabled = true;
        alarm__time = hours.value+":"+minutes.value+":"+seconds.value+" "+ampm.value;
        console.log(alarm__time);
        document.getElementById("startstop").innerHTML = "Clear Alarm"
        activeAlarm = true;
    }else{
        hours.disabled = false;
        minutes.disabled = false;
        seconds.disabled = false;
        ampm.disabled = false;

        document.getElementById("startstop").innerHTML = "Set Alarm"
        activeAlarm = false;
    }


}