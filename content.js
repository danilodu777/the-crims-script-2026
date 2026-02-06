function clicarBotaoPorTexto(texto) {
  const botoes = document.querySelectorAll("button");
  for (const btn of botoes) {
    if (btn.innerText.includes(texto)) {
      btn.click();
      break;
    }
  }
}

// Automação de vício
function tratarVicio() {
  const vicioBar = document.querySelector(".addiction-bar"); // ajuste seletor real
  if (vicioBar && parseInt(vicioBar.textContent) >= 50) {
    document.querySelector("#menu-hub")?.click();       // Serviços da Cidade
    clicarBotaoPorTexto("Hospital");
    clicarBotaoPorTexto("Desintoxicar");
    clicarBotaoPorTexto("COMPRE POR 5 CRÉDITOS");
    document.querySelector("#menu-robbery")?.click();   // volta para roubos
  }
}

// Roubo solo
function rouboSolo() {
  clicarBotaoPorTexto("Reabastecer Estamina");
  clicarBotaoPorTexto("ROUBAR!");
}

// Roubo em gangue
function rouboGangue() {
  clicarBotaoPorTexto("Reabastecer Estamina");
  clicarBotaoPorTexto("Aceitar");
  clicarBotaoPorTexto("Efetuar o crime!");
}

// Loop automático
setInterval(() => {
  tratarVicio();
  rouboSolo();
  rouboGangue();
}, 5000);
