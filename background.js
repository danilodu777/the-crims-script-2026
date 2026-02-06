// background.js

// Service worker for the extension
self.addEventListener('install', (event) => {
    console.log('Service worker installing...');
});

self.addEventListener('activate', (event) => {
    console.log('Service worker activating...');
});

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'TOGGLE_AUTOMATION') {
        console.log('Automation toggle received:', event.data.payload);
        // Add logic to handle automation toggle
    }
});
