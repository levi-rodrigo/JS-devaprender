// FOR-IN

const pessoa = {
    nome: 'Jhonatan',
    idade: 25
};

for(let chave in pessoa) {
    console.log(chave.nome);

}

const cores = ['vermelho', 'azul', 'verde'];

for (let indice in cores) {
    console.log(indice,cores[indice])
}


// --------------------------------------

// ForOFF

for(let cor of cores){
    console.log(cor);
}