const yesB=document.querySelector('#btnSi');

yesB.addEventListener('click',function () {
    alert('Oki, ya somos novios uwu')
});


const noB=document.querySelector('#btnNo');

noB.addEventListener('mouseover', function () {
    const randomX=parseInt(Math.random()*100);
    const randomY=parseInt(Math.random()*100);
    noB.style.setProperty('top',randomY+'%');
    noB.style.setProperty('left',randomX+'%');
    noB.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
});