

let btn = document.querySelector('button');
let bulb = document.querySelector('.bulb');
let flag = 0;
btn.addEventListener('click', ()=>{
    if(flag === 0) {
        bulb.style.backgroundColor = 'yellow'
        btn.innerHTML = 'OFF'
        flag = 1;
    }
    else {
        bulb.style.backgroundColor = 'rgb(70, 70, 70)';
        btn.innerHTML = 'ON'
        flag = 0;
    }
})
