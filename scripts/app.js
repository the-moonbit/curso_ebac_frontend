function saudacao(nome) {
    const mensagem = "Oi oi, " + nome + "! Tudo certo? O Gulp compilou e comprimiu este arquivo com sucesso!";
    console.log(mensagem);
    return mensagem;
}

document.addEventListener("DOMContentLoaded", function() {
    saudacao("Desenvolvedor");
});