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

  chrome.storage.local.get('settings', (data) => {
    const { roubo, treino, hospital, intervalo } = data.settings || {};
    const tempo = (intervalo || 5) * 1000;

    intervaloAutomacao = setInterval(() => {
      try {
        if (roubo) {
          const botaoRoubo = document.querySelector('.botao-roubo');
          if (botaoRoubo) {
            botaoRoubo.click();
            console.log('Roubo automático realizado!');
          }
        }

        if (treino) {
          const botaoTreino = document.querySelector('.botao-treino');
          if (botaoTreino) {
            botaoTreino.click();
            console.log('Treino automático iniciado!');
          }
        }

        if (hospital) {
          const linkHospital = document.querySelector('a[href="/hospital"]');
          if (linkHospital) {
            linkHospital.click();
            console.log('Navegando automaticamente para o hospital...');
          }
        }

      } catch (err) {
        console.error('Erro na automação:', err);
      }
    }, tempo);
  });
}

function pararAutomacao() {
  if (!automacaoAtiva) return;
  automacaoAtiva = false;
  clearInterval(intervaloAutomacao);
  intervaloAutomacao = null;
  console.log('Automação desativada.');
}
