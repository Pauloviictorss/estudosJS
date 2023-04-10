function teclaPressionada(event){
    console.log(`Tecla pressionada: ${event.keyCode}`);
    if(event.keyCode == 13){
        console.log('Você pressionou o Enter!');
    }
}

function soltouTecla(event){
    console.log(`Tecla solta: ${event.keyCode}`);
    if(event.keyCode == 13){
        console.log('Você soltou o Enter!');
    }
}

function ShiftPressionado(event){
    console.log(`Tecla pressionada: ${event.shiftKey}`);
}

function CtrlPressionado(event){
    console.log(`Tecla pressionada: ${event.ctrlKey}`);
}