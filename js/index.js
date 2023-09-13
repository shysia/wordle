const correct = 'APPLE';

let attempts = 0;
let index = 0;

function appStart(){
    const displayGameOver=()=>{
        const div = document.createElement('div');
        div.innerText = '게임이 종료됐습니다.';
        div.style = 'display:flex; justify-content:center; align-items:center; position:absolute; top:40%; left:40%; background-color:white; width:200px; height:100px';
        document.body.appendChild(div);
        }

    const gameover=()=>{
        window.removeEventListener("keydown",keydownn);
        displayGameOver();
        clearInterval(timeover);
    }

    const nextLine =()=>{
        if (attempts===5) gameover();
        attempts ++;
        index = 0;
    }

    const enter = () =>{
        let coC = 0;

        for(let i=0; i<5; i++){
            const answer = document.querySelector(`.main-block[data-index="${attempts}${i}"]`);
            const inW = answer.innerText;
            const coW = correct[i];

            if(inW === coW){
                coC ++;
                answer.style.backgroundColor='#6aaa64'; //정답
            }
            else if(correct.includes(inW)) answer.style.backgroundColor='#c9b458'; //반답
            else answer.style.backgroundColor='#787c7e'; //오답
            answer.style.color = 'white';
        }
        if(coC===5) gameover();
        else nextLine();
    }

    const backS =()=>{
        if(index>0){
        const backblock = document.querySelector(`.main-block[data-index="${attempts}${index-1}"]`);
        if(index!==0){
            backblock.innerText ='';
        }
            index --;
        }
    }


    const keydownn = (event) => {
        const key = event.key.toUpperCase();
        const keyCode = event.keyCode;
        const block = document.querySelector(`.main-block[data-index="${attempts}${index}"]`);
        
        if(event.keyCode===8) backS();
        else if(index === 5) {
            if(event.keyCode === 13) enter();
            else return;
        }
        else if(65<=keyCode && keyCode<=90){
            block.innerText = key;
            index ++;
        }
    }
    window.addEventListener("keydown",keydownn);
}

appStart();

//엔터13 백슾8