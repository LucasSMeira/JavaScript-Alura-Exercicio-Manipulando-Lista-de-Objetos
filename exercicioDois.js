
const catalogoFilmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
    { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
]

function filtrarFilmesPorAno(ano) {
    return catalogoFilmes.filter((filme) => { 
        if (filme.anoLancamento === ano) {
            return filme;
        }
        return null;
    })
}

const filmesAntigos = filtrarFilmesPorAno(1999);
const filmeAntigo = filtrarFilmesPorAno(1993);
const filmeRecente = filtrarFilmesPorAno(2010);

console.log(filmesAntigos);
console.log(filmeAntigo);
console.log(filmeRecente);