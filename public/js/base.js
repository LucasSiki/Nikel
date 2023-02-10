const nome = "Marcelo Eltz";
let nome2 = "Marcelo Eltz";
let pessoaDefault = {
    nome: "Marcelo Eltz",
    idade: "33",
    trabalho:"Programador"
}

let nomes = ["Marcelo Eltz", "Maria Silva", "Pedro Silva"];
let pessoas = [];

function alterarNome() {
    nome2 = "Maria Silva"
    console.log("Valor alterado:")
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome
    console.log("Valor alterado recebendo um nome:")
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("nome:");
console.log(pessoa.nome);

console.log("idade:");
console.log(pessoa.idade);

console.log("trabalho:");
console.log(pessoa.trabalho);
}

imprimirPessoa(pessoaDefault);



// imprimirPessoa({
//     nome: "Maria Silva",
//     idade: "25",
//     trabalho: "UX/UI Designer"
// })

//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");

//alterarNome();