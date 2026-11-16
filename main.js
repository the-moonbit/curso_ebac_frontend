const alunos = [
    { nome: 'Yasmim', nota: 8.5 },
    { nome: 'Ricardo', nota: 5.0 },
    { nome: 'Ryan', nota: 6.0 },
    { nome: 'Nathaly', nota: 9.2 },
    { nome: 'Victor', nota: 4.5 },
    { nome: 'Flávia', nota: 7.0 }
];

const filtrarAprovados = (listaDeAlunos) => {
    return listaDeAlunos.filter(aluno => aluno.nota >= 6);
};

const alunosAprovados = filtrarAprovados(alunos);
console.log(alunosAprovados);