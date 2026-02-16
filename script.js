const increaseButton = document.querySelector('.js-increase');
const decreaseButton = document.querySelector('.js-decrease');
const autoButton = document.querySelector('.js-auto');
const resetButton = document.querySelector(".js-reset");
const displayNum = document.querySelector('.js-display');

let num = parseInt(displayNum.innerHTML);
let interval = null
let active = null

increaseButton.addEventListener("click", () => {
  if(active){
    stopAutoActions()
    interval = setInterval(() => {
      increaseNum();
    }, 1000);
  }else{
    increaseNum()
  }
});

decreaseButton.addEventListener("click", () => {
  if (active) {
    stopAutoActions()
    interval = setInterval(() => {
    decreaseNum()
    }, 1000);
  } else{
  decreaseNum()
}
});

autoButton.addEventListener("click", () => {
  active = autoButton.classList.toggle('autoButton');
  if(!active){
    stopAutoActions();
  }
})

resetButton.addEventListener("click",() => {
  num = 0;
  updateDisplay()
  stopAutoActions()
  autoButton.classList.remove('autoButton');
});

function stopAutoActions() {
  if(interval){
    clearInterval(interval);
    interval = null;
  }
}

function decreaseNum() {
  num --;
  updateDisplay()
}

function increaseNum(){
    num ++;
    updateDisplay()
}
updateDisplay = () => {
  displayNum.innerHTML = num;
  resetButton.classList.toggle("resetButton", num !== 0);
}