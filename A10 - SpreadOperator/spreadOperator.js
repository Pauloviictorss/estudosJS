function cadastroPessoa(info){
    let novosDados = {
        ...info,
        idade: 23
    };

    return novosDados;
}

console.log(cadastroPessoa({nome: "Paulo", sobrenome: "Victor", cargo: "Desenvolvedor Front-End"}));
