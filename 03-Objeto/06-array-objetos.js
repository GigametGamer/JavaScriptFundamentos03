const aluno = [
    {nome: "Ana", nota:8},
    {nome: "Leonardo", nota:5},
    {nome: "Donatello", nota: 8.6},
    {nome: "Mickelangelo", nota: 9.9},
    {nome: "Rafael", nota: 2}
]

aluno.forEach((nota) => {
    console.log(nota.nome, nota.nota)
});