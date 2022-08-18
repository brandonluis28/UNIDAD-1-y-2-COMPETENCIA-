//se crean las constantes o valores de opciones y resultados
const piedra=0;
const papel=1;
const tijera=2;

const empate=0;
const ganaste=1;
const perdiste=2;
/*se mandan a llamar los id que contienen la informacion*/
const pieBtn=document.getElementById("piedra");
const papBtn=document.getElementById("papel");
const tijBtn=document.getElementById("tijera");
const resultText=document.getElementById("start-text");
const imagenM=document.getElementById("imgM");
const imagenU=document.getElementById("imgU");
/*Manda a llamar el metodo play, a la hora de hacer un click en algun boton*/ 
pieBtn.addEventListener("click",()=>{
    play(piedra);
});
papBtn.addEventListener("click",()=>{
    play(papel);
});
tijBtn.addEventListener("click",()=>{
    play(tijera);
});
/* Metodo Play */
function play(opcionU){
    /*se cambia la imagen por la elegida por el usuario
    y el texto inicial para determinar que la PC esta escojiendo*/
    imagenU.src="img/"+opcionU+".png";
    resultText.innerHTML="Escojiendo...";

    /*se crea un intervalo para cambiar las imagenes ya establecidas
    este igual le da la capacidad a la pc de elegir entre las opciones*/
    const intervalo=setInterval(function(){
        const opcionM=Math.floor(Math.random()*3);
        imagenM.src="img/"+opcionM+".png";
    }, 50)

    /*Funcion setTime
      este recopila la información y se utiliza un switch para mandar los mensajes despues del resultado optenido*/
    setTimeout(function(){
        clearInterval(intervalo);

        const opcionM=Math.floor(Math.random()*3);
        const result=calcResultado(opcionU,opcionM);
    
        imagenM.src="img/"+opcionM+".png";
    
        switch(result){
            case empate:
                resultText.innerHTML="Meh, empataste :/";
                break;
            case ganaste:
                resultText.innerHTML="Wow, ganaste :D";
                break;
            case perdiste:
                resultText.innerHTML="Vaya, perdiste :c";
                break;
        }
    }, 800);

}
/*se utiliza una funcion cacular resultado donde utiliza funciones if para determinar al ganador y al perdedor
esto dependiendo la opcion elegida y la asignada por la PC */
function calcResultado(opcionU,opcionM){
    if(opcionU===opcionM){
        return empate;

    }else if(opcionU===piedra){

        if(opcionM===papel) return perdiste;
        if(opcionM===tijera) return ganaste;

    }else if(opcionU===papel){
        if(opcionM===tijera) return perdiste;
        if(opcionM===piedra) return ganaste;

    }else if(opcionU===tijera){
        if(opcionM===piedra) return perdiste;
        if(opcionM===papel) return ganaste;

    }
}