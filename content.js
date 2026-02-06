function clicarBotao(seletor) {
    const btn = document.querySelector(seletor);
    if (btn) btn.click();
}

// Exemplo: se vício >= 50%, vai para hospital e desintoxica
function tratarVicio() {
    const vicioBar = document.querySelector(".barra-vicio"); // ajuste seletor
    if (vicioBar && parseInt(vicioBar.textContent) >= 50) {
        // navega até hospital e clica em desintoxicar
        clicarBotao("#hospital");
        clicarBotao("#desintoxicar");
        clicarBotao("#comprar-creditos");
        // volta para roubar
        clicarBotao("#roubar");
    }
}

// Exemplo: automação de roubo solo
function rouboSolo() {
    clicarBotao("#reabastecer-stamina");
    clicarBotao("#roubar");
}

// Exemplo: automação de roubo em gangue
function rouboGangue() {
    clicarBotao("#reabastecer-stamina");
    clicarBotao("#aceitar");
    clicarBotao("#efetuar-crime");
}

// Rodar em loop
setInterval(() => {
    tratarVicio();
    rouboSolo();
    rouboGangue();
}, 5000); // a cada 5 segundos
