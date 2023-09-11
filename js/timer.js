const tm = new Date();

function timer() {
    const tmm = new Date();
    const timer = new Date(tmm-tm);
    const mi = timer.getMinutes().toString().padStart(2,'0');
    const se = timer.getSeconds().toString().padStart(2,'0');
    const timerr = document.querySelector('#timer');
    timerr.innerText = `${mi}:${se}`;
}

setInterval(timer,1000);