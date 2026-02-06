// popup.js

document.getElementById('toggleBtn').addEventListener('click', () => {
  chrome.storage.local.get('automationEnabled', (data) => {
    const novoEstado = !data.automationEnabled;

    chrome.runtime.sendMessage({
      type: 'TOGGLE_AUTOMATION',
      payload: novoEstado
    });

    document.getElementById('toggleBtn').textContent = 
      novoEstado ? 'Desativar Automação' : 'Ativar Automação';
  });
});

// Inicializa o botão com o estado atual
chrome.storage.local.get('automationEnabled', (data) => {
  document.getElementById('toggleBtn').textContent = 
    data.automationEnabled ? 'Desativar Automação' : 'Ativar Automação';
});
