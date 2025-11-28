


addEventListener('mousemove', (e) => {
    document.body.style.setProperty("--x", e.clientX + 'px')
    document.body.style.setProperty("--y", e.clientY + 'px')

})

let vid = document.querySelector('video');

vid.addEventListener('click', () => {
    console.log("hq")
    vid.muted = false
    vid.play();
    
})
