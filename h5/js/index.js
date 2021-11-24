
var menu = document.querySelectorAll('.menu')[0]
var close = document.querySelectorAll('.close')[0]
var Mask_nav = document.querySelectorAll('.Mask_nav')[0]
var navin = document.querySelectorAll('.navin')[0]
close.onclick = function () {
    navin.className = 'navin'
    setTimeout(() => {
        Mask_nav.style.display = 'none'
    }, 400);
}
menu.onclick = function () {
    Mask_nav.style.display = 'block'
    setTimeout(() => {
        navin.className = 'navin navto'
    }, 10);
}