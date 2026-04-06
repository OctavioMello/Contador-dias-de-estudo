let estado = {
    diasEstudados: [],
}

//executarFuncoes(limparDados);

let dadosSalvos = localStorage.getItem("dias");

    if (dadosSalvos) {
        estado.diasEstudados = JSON.parse(dadosSalvos);
}
renderizar();

function cliqueDoBotao(){
    executarFuncoes(contarDia);
}

function limparDados(){
    localStorage.removeItem("dias");
    estado.diasEstudados = [];
}

function executarFuncoes(acao){
    acao();
    renderizar();
}

function renderizar(){
    let mensagem = document.getElementById('quantidadeDias');
    mensagem.innerHTML = `Você estudou até agora por: ${estado.diasEstudados.length} dias.`;
    let nome = document.getElementById('lista');
    nome.innerHTML = '';
    estado.diasEstudados.forEach(dias =>{
        const li = document.createElement('li');
        li.textContent = (`Dia ${dias.dia} de estudos\n Data ${dias.data}`);
        nome.appendChild(li);
    });
}

function contarDia(){
    let hoje = new Date().toLocaleDateString()
    const jaRegistradoHoje = estado.diasEstudados.some(diasExistentes => diasExistentes.data == hoje);
    if (!jaRegistradoHoje){
            estado.diasEstudados.push({
                dia : estado.diasEstudados.length + 1,
                data : hoje,
    })
    }
    localStorage.setItem("dias", JSON.stringify(estado.diasEstudados));
}