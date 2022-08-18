let nComer=0;
let nDormir=0;
let nEjercicio=0;

bComer=document.getElementById('btnComer');
bDormir=document.getElementById('btnDormir');
bEjercicio=document.getElementById('btnEjercitar');

bComer.addEventListener('click',function(){
    comer();
});

bDormir.addEventListener('click',function(){
    dormir();
});

bEjercicio.addEventListener('click',function(){
    ejercicio();
});


function neutral(){
    document.getElementById('imagen').src="img/neutral.gif";
}

function comer(){
    if(nComer<2){
        nComer++;
        document.getElementById('imagen').src="img/comer.gif";
        temporizador();
    }else{
        document.getElementById('imagen').src="img/explotar.jpeg";
        ocultarBotones();
        alert("¡Oh no, Naruto exploto!");
    }
}

function dormir(){
    document.getElementById('imagen').src="img/dormir.gif";
    temporizador();
}

function ejercicio(){
    document.getElementById('imagen').src="img/ejercicio.gif";
    temporizador();
}


function ocultarBotones(){
    bComer.style.display="none";
    bDormir.style.display="none";
    bEjercicio.style.display="none";
}

function mostrarBotones(){
    bComer.style.display="inline";
    bDormir.style.display="inline";
    bEjercicio.style.display="inline";
}

function temporizador(){
    ocultarBotones();
    setTimeout(function(){
        neutral();
        mostrarBotones();
    },5000);
}