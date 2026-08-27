// Selecionando os elementos do DOM
const form = document.querySelector("#meuFormulario");
const campoA = document.querySelector("#campoA");
const campoB = document.querySelector("#campoB");
const mensagem = document.querySelector("#mensagemFeedback");

form.addEventListener('submit', function(e) {
    // 1. Evita o comportamento padrão (recarregar a página)
    e.preventDefault();

    // 2. Converte os valores para números
    const valorA = Number(campoA.value);
    const valorB = Number(campoB.value);

    // 3. Validação: B precisa ser maior que A
    if (valorB > valorA) {
        // Sucesso
        mensagem.innerHTML = `<b>Boa!</b> O valor B (${valorB}) é maior que o valor A (${valorA}).`;
        mensagem.classList.remove('error');
        mensagem.classList.add('success');
    } else {
        // Negativo
        mensagem.innerHTML = `<b>Ops!</b> O valor B (${valorB}) precisa ser obrigatoriamente maior que A (${valorA}).`;
        mensagem.classList.remove('success');
        mensagem.classList.add('error');
    }
});