// popup.js

document.getElementById('toggleBtn').addEventListener('click', () => {
  chrome.storage.local.get(['automationEnabled', 'settings'], (data) => {
    const novoEstado = !data.automationEnabled;

    const settings = {
      roubo: document.getElementById('roubo').checked,
      treino: document.getElementById('treino').checked,
      hospital: document.getElementById('hospital').checked,
      intervalo: parseInt(document.getElementById('intervalo').value, 10) || 5
    };

    chrome.storage.local.set({ settings });

    chrome.runtime.sendMessage({
      type: 'TOGGLE_AUTOMATION',
      payload: novoEstado
    });

    document.getElementById('toggleBtn').textContent = 
      novoEstado ? 'Desativar Automação' : 'Ativar Automação';
  });
});

// Inicializa o estado do botão e checkboxes
chrome.storage.local.get(['automationEnabled', 'settings'], (data) => {
  document.getElementById('toggleBtn').textContent = 
    data.automationEnabled ? 'Desativar Automação' : 'Ativar Automação';

  if (data.settings) {
    document.getElementById('roubo').checked = data.settings.roubo;
    document.getElementById('treino').checked = data.settings.treino;
    document.getElementById('hospital').checked = data.settings.hospital;
    document.getElementById('intervalo').value = data.settings.intervalo;
  }
});
