// background.js

// Service worker da extensão
self.addEventListener('install', () => {
  console.log('Service worker instalando...');
});

self.addEventListener('activate', () => {
  console.log('Service worker ativado...');
});

// Escuta mensagens vindas do popup ou do content script
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'TOGGLE_AUTOMATION') {
    console.log('Comando de automação recebido:', event.data.payload);

    // Aqui você pode salvar o estado no storage
    chrome.storage.local.set({ automationEnabled: event.data.payload });

    // E repassar para o content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, {
          type: 'AUTOMATION_STATUS',
          payload: event.data.payload
        });
      }
    });
  }
});
