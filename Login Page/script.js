const counterDiv = document.querySelector('.js-counter');
counterDiv.innerHTML = 30;

function counterDown(){
    let counter = 30;
    for (let i = 1; i <= counter; i++) {

        setTimeout(() => {
            counter--;
            counterDiv.innerHTML = counter;
    
        }, i*1000);
    }
}

counterDown();