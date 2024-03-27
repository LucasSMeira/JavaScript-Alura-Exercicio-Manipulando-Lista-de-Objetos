
const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    }
]

function encontrarFuncionarioPorId(idFuncionario) {
    for (const departamento of departamentos) {
        const funcionario = departamento.funcionarios.find(funcionario => funcionario.id === idFuncionario);
        if (funcionario) {
            return funcionario;
        }
    }
    return null;
}

const funcionarioExistente = encontrarFuncionarioPorId(102);
if (funcionarioExistente) {
    console.log(funcionarioExistente);
} else {
    console.log("Funcionário não encontrado.");
}

const funcionarioInexistente = encontrarFuncionarioPorId(999);
if (funcionarioInexistente) {
    console.log(funcionarioInexistente);
} else {
    console.log("Funcionário não encontrado.");
}