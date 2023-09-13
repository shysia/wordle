const tm = new Date();
let timeover;


function timer() {
    const tmm = new Date();
    const timer = new Date(tmm-tm);
    const mi = timer.getMinutes().toString().padStart(2,'0');
    const se = timer.getSeconds().toString().padStart(2,'0');
    const timerr = document.querySelector('#timer');
    timerr.innerText = `${mi}:${se}`;
}

timeover = setInterval(timer,1000);