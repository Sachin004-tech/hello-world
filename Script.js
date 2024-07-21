const currentTime = document.querySelector("h1");
const content = document.querySelector(".content") 
const selectMenu = document.querySelectorAll("select");
const btn = document.querySelector("button")

let alarmTime,
ringtone = new Audio("./ringtone/alarm_clock_old.mp3")

for(let i = 12; i > 0; i--){
    i = i<10 ? "0" + i : i;
    let option = `<option value = ${i}>${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for(let i = 59; i > 0; i--){
    i = i<10 ? "0" + i : i;
    let option = `<option value = ${i}>${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for(let i = 2; i > 0; i--){
   let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value = ${ampm}>${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
    //getting hours and minutes and seconds
    let data = new Date(),
    h = data.getHours(),
    m = data.getMinutes(),
    s = data.getSeconds(),
    ampm = "AM";

    if(h >= 12){
        h = h-12;
        ampm = "PM";
    }

    //if hours value = 0 , set this to 12
    h = h == 0 ? h = 12 : h;

    //adding 0 before hr, min, sec if this value is less than 10 
    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`

    if(alarmTime == `${h}:${m}:${s} ${ampm}`){
        ringtone.play();
        ringtone.loop = true;
    }
},1000);

function setAlarm() {
    //getting hour, minute, ampm select tag value
    let time = `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value}:`
    if(time.includes("Hour") || time.includes("minute") || time.includes("AM/PM")){
        return alert("mention it pls");

    }
    alarmTime = time; 
    content.classList.add("disable"); 
    btn.innerText = "clear Alarm";  
} 

btn.addEventListener("click",setAlarm);