// function apresentar(nome) {
//     console.log(`Olá, eu sou ${nome}!`);
// }

// apresentar("João");

function somar(a, b) {
    console.log(`A soma de ${a} + ${b} é igual a ${a + b}`);
}

somar(5, 3);

function apresentar(nome = "Visitante") {
    console.log(`Olá, eu sou ${nome}!`);
}

apresentar();
apresentar("João");