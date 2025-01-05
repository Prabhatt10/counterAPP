const countVal = document.querySelector('#counting');

// SOUND
const coin_sound = document.querySelector('#coin_sound');
const fireball_sound = document.querySelector('#fireball_sound');
const pipe_sound = document.querySelector('#pipe_sound');
const stomp_sound = document.querySelector('#stomp_sound');
const pause_sound = document.querySelector('#pause_sound');



// // decrement or increment by 1

// increment
const increment = () =>{
    let value = parseInt(countVal.innerText);
    value = value+1;
    countVal.innerText=value;
    coin_sound.currentTime = 0;
    coin_sound.play();
    
}
//decrement
const decrement = () =>{
    let value = parseInt(countVal.innerText);
    value = value-1;
    countVal.innerText=value;
    fireball_sound.currentTime = 0;
    fireball_sound.play();
}


// // decrement or increment by 10

// increment10
const incrementTen = () =>{
    let value = parseInt(countVal.innerText);
    value = value+10;
    countVal.innerText=value;
    pause_sound.currentTime = 0;
    pause_sound.play();
}
// decrement10
const decrementTen = () =>{
    let value = parseInt(countVal.innerText);
    value = value-10;
    countVal.innerText=value;
    pipe_sound.currentTime = 0;
    pipe_sound.play();
}

// // reset button

const reset = () =>{
    let value = parseInt(countVal.innerText);
    value=0;
    countVal.innerText=value;
    stomp_sound.currentTime = 0;
    pipe_sound.play();
}
