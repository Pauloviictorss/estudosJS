function temp(){
    document.write('<p style="color: #bd2424"><strong>Executando...</strong></p>')
}

// Executar para sempre
/*
Como parar?
Caso atribua a uma variável, é possível usar a função clearInterval(nomeVar); 
*/
document.getElementById('execute').innerHTML = setInterval(temp, 1000)

// Executar depois de determinado tempo
//document.getElementById('execute').innerHTML = setTimeout(temp, 3000)