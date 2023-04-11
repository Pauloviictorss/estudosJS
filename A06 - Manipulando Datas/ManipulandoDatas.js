// Armazenando a data atual.
var data = new Date();

// Descobrindo algumas partes da hora.
data.getHours();
data.getMinutes();
data.getSeconds();
data.getMilliseconds();

// Setando a data para 10/03/2029.
var data = new Date(Date.parse("March 10, 2029"));

// Descobrindo algumas partes da data.
data.getDate();
data.getDay();
data.getFullYear();

// Transformando no padrão brasileiro.
data.getDate() + data.getMonth() + data.getFullYear()

// Somando dias.
data.setDate(data.getDate() + 54)