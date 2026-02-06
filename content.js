// content.js

let automacaoAtiva = false;
let intervaloAutomacao = null;

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'AUTOMATION_STATUS') {
    if (message.payload) {
      iniciarAutomacao();
    } else {
      pararAutomacao();
    }
  }
});

function iniciarAutomacao() {
  if (automacaoAtiva) return;
  automacaoAtiva = true;
  console.log('Automação ativada!');

  intervaloAutomacao = setInterval(() => {
    try {
      const botaoRoubo = document.querySelector('.botao-roubo');
      if (botaoRoubo) {
        botaoRoubo.click();
        console.log('Roubo automático realizado!');
      }

      const linkHospital = document.querySelector('a[href="/hospital"]');
      if (linkHospital) {
        linkHospital.click();
        console.log('Navegando automaticamente para o hospital...');
      }

      const botaoTreino = document.querySelector('.botao-treino');
      if (botaoTreino) {
        botaoTreino.click();
        console.log('Treino automático iniciado!');
      }

    } catch (err) {
      console.error('Erro na automação:', err);
    }
  }, 5000);
}

function pararAutomacao() {
  if (!automacaoAtiva) return;
  automacaoAtiva = false;
  clearInterval(intervaloAutomacao);
  intervaloAutomacao = null;
  console.log('Automação desativada.');
}
