const counterDiv = document.querySelector('.js-counter');
counterDiv.innerHTML = 30;

// function counterDown(){
//     let counter = 30;
//     for (let i = 1; i <= counter; i++) {

//         setTimeout(() => {
//             counter--;
//             counterDiv.innerHTML = counter;
    
//         }, i*1000);
//     }
// }

function counterDown(){
    let counter = 30;
    let interval = setInterval(() => {
        counter--;
        counterDiv.innerHTML = counter;
        if(counter == 0){
            clearInterval(interval);
        }
    }, 1000);
}
counterDown();