// task 1 completed

// let h1 = document.querySelector('h1')
// let inc = document.querySelector('.inc')
// let dec = document.querySelector('.dec')

// let count = 0;

// inc.addEventListener('click', function(){
//     count++;
//     h1.innerHTML = count;
// })

// dec.addEventListener('click', function(){
//     count--;
//     h1.innerHTML = count
// })


// task 2 

let box = document.querySelector('.box')
let btn = document.querySelector('.btn')




btn.addEventListener('click', function() {
    let num1 = Math.floor(Math.random() * 256);
    let num2 = Math.floor(Math.random() * 256);
    let num3 = Math.floor(Math.random() * 256);
    box.style.backgroundColor = (`rgb(${num1}, ${num2}, ${num3})`)

    box.innerHTML = (`rgb(${num1}, ${num2}, ${num3})`)
})

