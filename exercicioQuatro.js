
const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 },
    { id: 4, nome: "Girafa", especie: "Mamífero", idade: 7 },
    { id: 5, nome: "Tigre", especie: "Felino", idade: 4 },
    { id: 6, nome: "Orangotango", especie: "Primata", idade: 8 },
    { id: 7, nome: "Cobra", especie: "Réptil", idade: 2 },
    { id: 8, nome: "Águia", especie: "Ave", idade: 5 }
];


function ordenarAnimais(comparacao) {
    return animais.sort(comparacao);
}

function compararIdadeCrescente(a, b) {
    return a.idade - b.idade;
}

function compararIdadeDecrescente(a, b) {
    return b.idade - a.idade;
}

// Exemplo de uso
console.log("Animais ordenados por idade crescente:");
console.log(ordenarAnimais(compararIdadeCrescente));

console.log("\nAnimais ordenados por idade decrescente:");
console.log(ordenarAnimais(compararIdadeDecrescente));