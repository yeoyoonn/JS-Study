const clock = document.querySelector("h2#clock")
clock.innerHTML = "00:00";

function getClock(){
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const min = date.getMinutes().toString().padStart(2, "0");
    const sec = date.getSeconds().toString().padStart(2, "0");
    clock.innerHTML =`${hours}:${min}:${sec}`;
}
getClock();
setInterval(getClock, 1000);