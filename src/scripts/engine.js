
const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLefl: document.querySelector("#time-lefl"),
        score: document.querySelector("#score")
    },
    values:{
       
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        curretTime: 60,
         
    },

    actions:{
        timerId:  setInterval(randomSquare, 1000),
        countDownTimerId: setInterval(countDown,1000),
    }
};

function countDown() {
    state.values.curretTime--;
    state.view.timeLefl.textContent = state.values.curretTime;
    
    if(state.values.curretTime < 0){
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId)
        alert ("Game Over! O seu resultado foi: " + state.values.result);
    }

}

function playSound(){
    let audio = new Audio("./src/audios/src_audios_hit.m4a");
    audio.volume = 0.2;
    audio.play();
}
function randomSquare() {
    state.view.squares.forEach((squares) => {
        squares.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id

}
function moveEnemy() {
   

}


function addListenerHitBox() {
    state.view.squares.forEach((squares)=> {
       squares.addEventListener("mousedown",() => {
        if(squares.id === state.values.hitPosition){
            state.values.result++
            state.view.score.textContent = state.values.result;
            state.values.hitPosition = null;
            playSound();
        }
       
       })
    })
}

function initialize(){
//moveEnemy();
addListenerHitBox();
}

initialize()