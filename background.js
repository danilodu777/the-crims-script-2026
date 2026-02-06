// background.js

self.addEventListener('install', () => {
  console.log('Service worker instalando...');
});

self.addEventListener('activate', () => {
  console.log('Service worker ativado...');
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'TOGGLE_AUTOMATION') {
    console.log('Comando de automação recebido:', event.data.payload);

    chrome.storage.local.set({ automationEnabled: event.data.payload });

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
