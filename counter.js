let counter = 0;

const counterValue = document.getElementById('count-value');
const decrementBtn = document.getElementById('decrement-btn');
const incrementBtn = document.getElementById('increment-btn');

incrementBtn.addEventListener('click', () => {
    if(counter < 6){
        counter++;
        counterValue.innerHTML = counter;   
    }
})

decrementBtn.addEventListener('click', () => {
    if(counter > 0){
        counter--;
        counterValue.innerHTML = counter;
    }
})