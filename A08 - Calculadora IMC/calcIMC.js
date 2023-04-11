var altura;
var imc;
var peso;
var resultado;

function resetValores(){
    peso = document.getElementById('peso').value = ''
    altura = document.getElementById('altura').value = ''
}

function calcular(){
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    imc = (peso/(altura*altura))*10000;
    
    if(imc < 17){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = `Peso: ${peso}kg<br>Altura: ${altura}cm<br>Seu resultado foi: ${(imc).toFixed(2)}.<br>Você está muito abaixo do peso.`
        resetValores();
        return false;
    } else if(imc >= 17 && imc <= 18.49){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = `Peso: ${peso}kg<br>Altura: ${altura}cm<br>Seu resultado foi: ${(imc).toFixed(2)}<br>Você está abaixo do peso.`
        resetValores();
        return false;
    } else if(imc >= 18.5 && imc <= 24.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = `Peso: ${peso}kg<br>Altura: ${altura}cm<br>Seu resultado foi: ${(imc).toFixed(2)}<br>Seu peso está normal.`
        resetValores();
        return false;
    } else if(imc >= 25 && imc <= 29.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = `Peso: ${peso}kg<br>Altura: ${altura}cm<br>Seu resultado foi: ${(imc).toFixed(2)}<br>Você está acima do peso.`
        resetValores();
        return false;
    } else{
        resultado = document.getElementById('resultado');
        resultado.innerHTML = ``
        return false;
    }
}