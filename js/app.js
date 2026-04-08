let estado = {
    diasEstudados: [],
    mensagemFeedback: '',
}

let dadosSalvos = localStorage.getItem("dias");

    if (dadosSalvos) {
        estado.diasEstudados = JSON.parse(dadosSalvos);
}
renderizar();

function cliqueDoBotao(){
    executarFuncoes(contarDia, renderizar);
    apagarFeedback();
}

function limparDados(){
    localStorage.removeItem("dias");
    estado.diasEstudados = [];
    renderizar();
}

function executarFuncoes(acao, atualizacao){
    acao();
    atualizacao();
}

function apagarFeedback(){
    setTimeout(() => {
    estado.mensagemFeedback = '';
    renderizar();
}, 3000);
}

function renderizar(){
    let palavraDia = estado.diasEstudados.length > 1 ? 'dias' : 'dia';
    let mensagem = document.getElementById('quantidadeDias');
    mensagem.innerHTML = `Você estudou até agora por: ${estado.diasEstudados.length} ${palavraDia}.`;
    let nome = document.getElementById('lista');
    nome.innerHTML = '';
    estado.diasEstudados.forEach(dias =>{
        const li = document.createElement('li');
        li.innerHTML = `
        <strong>Dia ${dias.dia}</strong><br>
        <small>${dias.data}</small>`;
        nome.appendChild(li);
    });
    let feedback = document.getElementById('feedback');
    feedback.innerHTML = estado.mensagemFeedback;
}

function contarDia(){
    let hoje = new Date().toLocaleDateString();
    const jaRegistradoHoje = estado.diasEstudados.some(diasExistentes => diasExistentes.data == hoje);
    if (!jaRegistradoHoje){
            estado.mensagemFeedback = 'Dia registrado com sucesso!'
            estado.diasEstudados.push({
                dia : estado.diasEstudados.length + 1,
                data : hoje,
    })
    }
    else{
        estado.mensagemFeedback = 'Você já registrou o dia de hoje.'
    }
    localStorage.setItem("dias", JSON.stringify(estado.diasEstudados));
}