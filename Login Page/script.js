const counterDiv = document.querySelector('.js-counter');
const counterValue = counterDiv.innerHTML;


function counterDown(counterValue){

    let counter = parseInt(counterValue);

    for (let i = 1; i <= counter; i++) {

        setTimeout(() => {
            counter--;
            counterDiv.innerHTML = counter;
    
        }, i*1000);
    }
}

counterDown (counterValue);