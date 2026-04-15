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
    registrarDia();
    renderizar();
    apagarFeedback();
}

function registrarDia(){
    let {repetido, hoje} = verificarDia(); //Usar {repetido, hoje} substitui a utilização da estrutura varoável.repetido e variável.hoje toda vez que precisasse utilizar esses dois objetos
    adicionarDia(repetido, hoje);
    salvardados(estado.diasEstudados);
}

function verificarDia(){
    let hoje = new Date().toLocaleDateString();
    let repetido = false;
    if (estado.diasEstudados.some(diasExistentes => diasExistentes.data == hoje)){
        repetido = true;
    }
    return {repetido, hoje}
}

function adicionarDia(jaRegistradoHoje, hoje){
    if (!jaRegistradoHoje){//Mesma coisa que (jaRegistradoHoje == false)
        estado.mensagemFeedback = 'Dia registrado com sucesso!'
        estado.diasEstudados.push({
            dia : estado.diasEstudados.length + 1,
            data : hoje,
    })
    }
    else{
        estado.mensagemFeedback = 'Você já registrou o dia de hoje.'
    }
}

function salvardados(dados){
    localStorage.setItem("dias", JSON.stringify(dados))
}

function limparDados(){
    localStorage.removeItem("dias");
    estado.diasEstudados = [];
    renderizar();
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