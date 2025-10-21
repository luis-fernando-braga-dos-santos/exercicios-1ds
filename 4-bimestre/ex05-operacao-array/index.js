// CRIE UMA LÓGICA AQUI

const prompt = require("prompt-sync")()

console.log("=== Sistema de Controle de Produção ===")

let continuar = "S"
let totalDias = 0
let totalGeral = 0

while (continuar.toUpperCase() === "S") {
    totalDias++
    console.log("\n--- Novo Turno ---")

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
    continuar = prompt("\nDeseja simular outro turno? (S/N) ")
}

console.log("\nResumo dos dias anteriores:")
let dia = 1
let totalRestante = totalGeral

while (dia <= totalDias) {
    console.log(`Dia ${dia}: ${Math.floor(totalGeral / totalDias)} peças produzidas`)
    dia++
}

console.log(`Total geral: ${totalGeral} peças`)
console.log("\nEncerrando sistema de produção...")

// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { compras }