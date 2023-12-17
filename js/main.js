var ball = document.querySelector(".ball");
var slowbtn = document.querySelector(".slowbtn");
var fastbtn = document.querySelector(".fastbtn");

slowbtn.addEventListener('click',animateSlow);

function animateSlow (){

    ball.style.left = '90%';
    ball.style.transition  = 'all 4s';

    setTimeout(function (){
        ball.style.left = '0%';
    },3000)

}


fastbtn.addEventListener('click',animateFast);

function animateFast (){

    ball.style.left = '90%';
    ball.style.transition  = 'all 1s';

    setTimeout(function (){
        ball.style.left = '0%';
    },888)

}