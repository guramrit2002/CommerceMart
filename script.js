document.addEventListener('DOMContentLoaded', () => {
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close')
if (bar) {
    console.log('if is working ')
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })    
}
else {
    console.log('if is not working ')
}
if (close) {
    console.log('if close is working ')
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })    
}
else {
    console.log('if close is not working ')
}
});