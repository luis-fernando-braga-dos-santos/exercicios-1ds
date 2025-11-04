// CRIE UMA LÓGICA ABAIXO

const prompt = require('prompt-sync')();

console.log("=== Sistema de Controle de Produção ===");

const dias = parseInt(prompt("Quantos dias deseja registrar? "));
let producao = [];

for (let i = 0; i < dias; i++) {
    const qtd = parseInt(prompt(`Digite a quantidade produzida no dia ${i + 1}: `));
    producao.push(qtd);
}

console.log("\n--- RELATÓRIO DE PRODUÇÃO ---");
console.log("Produções registradas:", producao);

let total = 0;
for (let i = 0; i < producao.length; i++) {
    total += producao[i];
}
let media = total / producao.length;
console.log("Total produzido:", total, "peças");
console.log("Média diária:", media);

let maior = producao[0];
let menor = producao[0];
let diaMaior = 1;
let diaMenor = 1;

for (let i = 1; i < producao.length; i++) {
    if (producao[i] > maior) {
        maior = producao[i];
        diaMaior = i + 1;
    }
    if (producao[i] < menor) {
        menor = producao[i];
        diaMenor = i + 1;
    }
}
console.log(`Maior produção: ${maior} (dia ${diaMaior})`);
console.log(`Menor produção: ${menor} (dia ${diaMenor})`);

let crescente = [...producao];
for (let i = 0; i < crescente.length; i++) {
    for (let j = i + 1; j < crescente.length; j++) {
        if (crescente[i] > crescente[j]) {
            let temp = crescente[i];
            crescente[i] = crescente[j];
            crescente[j] = temp;
        }
    }
}
console.log("Ordem crescente:", crescente);

let decrescente = [...producao];
for (let i = 0; i < decrescente.length; i++) {
    for (let j = i + 1; j < decrescente.length; j++) {
        if (decrescente[i] < decrescente[j]) {
            let temp = decrescente[i];
            decrescente[i] = decrescente[j];
            decrescente[j] = temp;
        }
    }
}
console.log("Ordem decrescente:", decrescente);

if (media >= maior / 2) {
    console.log("Produção estável!");
} else {
    console.log("Produção abaixo do ideal.");
}

module.exports = { producao, total, media, maior, menor };

