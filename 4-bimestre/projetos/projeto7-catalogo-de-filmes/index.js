// CRIE UMA LÓGICA ABAIXO

console.log("=== Catálogo de Filmes ===");

let filme1 = { titulo: "Matrix", genero: "Ficção Científica", ano: 1999, avaliacao: 9.5 };
let filme2 = { titulo: "Vingadores: Ultimato", genero: "Ação", ano: 2019, avaliacao: 9.2 };
let filme3 = { titulo: "Divertida Mente", genero: "Animação", ano: 2015, avaliacao: 10 };
let filme4 = { titulo: "O Senhor dos Anéis: O Retorno do Rei", genero: "Fantasia", ano: 2003, avaliacao: 9.7 };
let filme5 = { titulo: "Coringa", genero: "Drama", ano: 2019, avaliacao: 8.9 };
let filme6 = { titulo: "Interestelar", genero: "Ficção Científica", ano: 2014, avaliacao: 9.8 };
let filme7 = { titulo: "Titanic", genero: "Romance", ano: 1997, avaliacao: 8.7 };
let filme8 = { titulo: "Homem-Aranha: Sem Volta para Casa", genero: "Ação", ano: 2021, avaliacao: 9.0 };
let filme9 = { titulo: "Toy Story", genero: "Animação", ano: 1995, avaliacao: 8.5 };
let filme10 = { titulo: "Pantera Negra", genero: "Ação", ano: 2018, avaliacao: 8.8 };

let filmes = [filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10];

for (let i = 0; i < filmes.length; i++) {
    console.log(`${i + 1}. ${filmes[i].titulo} - ${filmes[i].genero}`);
}

let melhorFilme = filmes[0];
for (let i = 1; i < filmes.length; i++) {
    if (filmes[i].avaliacao > melhorFilme.avaliacao) {
        melhorFilme = filmes[i];
    }
}

let somaAvaliacoes = 0;
for (let i = 0; i < filmes.length; i++) {
    somaAvaliacoes += filmes[i].avaliacao;
}
let mediaAvaliacoes = somaAvaliacoes / filmes.length;

console.log("Filme mais bem avaliado:");
console.log(`${melhorFilme.titulo} (${melhorFilme.avaliacao}/10)`);
console.log(`Média geral das avaliações: ${mediaAvaliacoes.toFixed(1)}`);



module.exports = { filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10 }