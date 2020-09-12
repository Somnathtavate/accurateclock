
setInterval(() => {
    let minutehand = document.querySelector('#minutehand');
    let hourhand =   document.querySelector('#hourhand');
    console.log(hourhand,minutehand)
    let s =   document.querySelector('#secondhand') ;      
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds(); 
    let rotsec = 6*seconds; 
    let rotmin = 6*minutes; 
    let rothour = 30*hours+minutes/2; 
    s.style.transform = `rotate(${rotsec}deg)`
    minutehand.style.transform = `rotate(${rotmin}deg)`
    hourhand.style.transform = `rotate(${rotmin}deg)`
}, 1000);

// setInterval(() => {
//     d = new Date();
//     htime = d.getHours();
//     mtime = d.getMinutes();
//     stime = d.getSeconds();
//     hrotation = 30*htime + mtime/2;
//     mrotation = 6*mtime;
//     srotation = 6*stime;

    // hour.style.transform = `rotate(${hrotation}deg)`;
//     minute.style.transform = `rotate(${mrotation}deg)`;
//     second.style.transform = `rotate(${srotation}deg)`;
// }, 1000);