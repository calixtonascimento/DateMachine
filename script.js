function respostaSim() {
    // Ocultar a pergunta inicial
    document.getElementById("perguntaInicial").style.display = "none";
    
    // Exibe a opção "Hoje ou amanhã?"
    document.getElementById("opcaoContainer").style.display = "block"; 
    
    // Esconde os botões iniciais
    document.querySelector(".buttons").style.display = "none";
    
    // Limpa a resposta anterior
    document.getElementById("resposta").innerHTML = "";
}

function respostaNao() {
    // Exibe a mensagem de opção em manutenção
    document.getElementById("resposta").innerHTML = "Opção em manutenção, volte mais tarde!";
    
    // Esconde os botões de resposta
    document.querySelector(".buttons").style.display = "none";
}

function escolherData(data) {
    // Exibe a resposta com a escolha de data
    document.getElementById("resposta").innerHTML = `Podemos sair sim ${data.toLowerCase()}!`;
    
    // Exibe o link do WhatsApp com a mensagem
    const numeroWhatsApp = "5541999077431";  // Substitua pelo seu número
    const mensagem = encodeURIComponent(`Oi! Eu adoraria sair ${data.toLowerCase()}!`);
    
    // Link do WhatsApp
    const link = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
    
    // Redireciona para o WhatsApp
    window.open(link, "_blank");
}
