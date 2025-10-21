// Antes de iniciar, instale o prompt-sync para entrada de dados e o jest para testar
// Comando: npm i prompt-sync; npm i -D jest

const prompt = require("prompt-sync")()

console.log("=== Sistema de Controle de Produção ===")

let continuar = "S"
let totalDias = 0
let totalGeral = 0

while (continuar.toUpperCase() === "S") {
    totalDias++
    console.log("--- Novo Turno ---")

    let meta = parseInt(prompt("Quantas peças devem ser produzidas no turno? "))
    let producao = 0

    for (let i = 1; i <= meta; i++) {
        console.log(`Peça ${i} produzida com sucesso.`)
        producao++
    }

    if (producao === meta) {
        console.log("Meta alcançada!")
    } else {
        console.log("Meta não alcançada.")
    }

    totalGeral += producao
    continuar = prompt("Deseja simular outro turno? (S/N) ")
}

console.log("Resumo dos dias anteriores:")
let dia = 1
let totalRestante = totalGeral

while (dia <= totalDias) {
    console.log(`Dia ${dia}: ${Math.floor(totalGeral / totalDias)} peças produzidas`)
    dia++
}

console.log(`Total geral: ${totalGeral} peças`)
console.log("Encerrando sistema de produção...")

// CRIE UMA LÓGICA ABAIXO