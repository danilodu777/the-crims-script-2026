function clicarBotaoPorTexto(texto) {
  const botoes = document.querySelectorAll("button");
  for (const btn of botoes) {
    if (btn.innerText.includes(texto)) {
      btn.click();
      break;
    }
  }
}

// Observa mudanças na barra de stamina
function observarStamina() {
  const staminaBar = document.querySelector(".stamina-bar"); // ajuste seletor real
  if (!staminaBar) return;

  const observer = new MutationObserver(() => {
    const valor = parseInt(staminaBar.textContent);

    if (valor >= 50) {
      clicarBotaoPorTexto("ROUBAR!");
    } else if (valor <= 0) {
      clicarBotaoPorTexto("Reabastecer Estamina");
    }
  });

  observer.observe(staminaBar, { childList: true, subtree: true, characterData: true });
}

// Inicializa observação
observarStamina();
