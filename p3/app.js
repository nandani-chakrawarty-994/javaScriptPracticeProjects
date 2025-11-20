
let btn = document.querySelector('button');
let value = document.querySelector('h1');
let inner = document.querySelector('.inner');
let p = document.querySelector('p');
let count = 0;

let num = 50 + Math.floor(Math.random()*50)
console.log(num)
btn.addEventListener('click', function() {
    console.log('hello');
    btn.style.pointerEvents = 'none'
    let timer = setInterval( () => {
        count++;
        value.innerHTML = `${count}%`;
        inner.style.width = `${count}%`;
        
    }, num)
    setTimeout (() => {
        clearInterval(timer);
        btn.innerHTML = 'Downloaded';
        btn.style.opacity = 0.5;
        p.innerHTML = `Download completed in ${num/10} seconds`
    }, num*100)

    
})



