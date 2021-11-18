setInterval(() => {
    d = new Date();
    hourtime = d.getHours();
    minutetime = d.getMinutes();
    secondtime = d.getSeconds();
    hrotation = 30*hourtime + minutetime/2;
    mrotation = 6*minutetime;
    srotation = 6*secondtime;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);