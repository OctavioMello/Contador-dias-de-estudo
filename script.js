let estado = {
    diasEstudados: [],
}
let dadosSalvos = localStorage.getItem("dias");

    if (dadosSalvos) {
        estado.diasEstudados = JSON.parse(dadosSalvos);
}
renderizar();

function cliqueDoBotao(){
    contarDia();
    renderizar();
}

function renderizar(){
    let mensagem = document.getElementById('quantidadeDias');
    mensagem.innerHTML = `Você estudou até agora por: ${estado.diasEstudados.length} dias.`;
    let nome = document.getElementById('lista');
    nome.innerHTML = '';
    estado.diasEstudados.forEach(dias =>{
        const li = document.createElement('li');
        li.textContent = (`Dia ${dias} de estudos.`);
        nome.appendChild(li);
    });
}

function contarDia(){
    estado.diasEstudados.push(estado.diasEstudados.length + 1);
    localStorage.setItem("dias", JSON.stringify(estado.diasEstudados));
}