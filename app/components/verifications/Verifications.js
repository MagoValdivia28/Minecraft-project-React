const verificacoesEquipamento = (nome, descricao, material, tipo, dano, defesa, cor, errorsArray) => {
    if (!nome) {
        errorsArray.push("Nome não informado");
    }
    if (!descricao) {
        errorsArray.push("Descrição não informada");
    }
    if (!material) {
        errorsArray.push("Material não informado");
    }
    if (!tipo) {
        errorsArray.push("Tipo não informado");
    }
    if(!dano && !defesa) {
        errorsArray.push("O valor do dano ou da defesa tem que ser informado");
    }
    if (!cor) {
        errorsArray.push("Cor não informada");
    }
    if (tipo !== "espada" && tipo !== "capacete" && tipo !== "peitoral" && tipo !== "calca" && tipo !== "bota") {
        errorsArray.push("Tipo deve ser espada, capacete, peitoral, calça ou bota");
    }
    if (isNaN(dano) || isNaN(defesa)) {
        errorsArray.push("Dano e defesa devem ser um número");
    }
    if (dano > 20 || dano < 0) {
        errorsArray.push("Dano deve ser entre 0 e 20");
    }
    if (defesa > 20 || defesa < 0) {
        errorsArray.push("Defesa deve ser entre 0 e 20");
    }
}

export default verificacoesEquipamento