const lista = [3, 7, 2, 4, 87, 1, 23, 18];

const novaLista = lista.map(function(item, index){
    console.log(`Position: ${index}, Item: ${item}`);
    return item;
})

console.log(novaLista);

const soma = lista.reduce(function(firstItem, nextItem){
    return firstItem + nextItem;
})

console.log(`A soma do array é ${soma}.`);

const find = lista.find(function(item){
    return item === 1327;
})

console.log(`O item existe no array? ${find}`);