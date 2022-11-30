const toggle = document.getElementById('toggle-bar');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');

if(toggle){

    toggle.addEventListener('click',()=>{
    navbar.classList.add('active');
});

}

if(close){

    close.addEventListener('click',()=>{
    navbar.classList.remove('active');
});

}