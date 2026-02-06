// popup.js

// Function to open the popup
function openPopup() {
    const popup = document.createElement('div');
    popup.style.width = '300px';
    popup.style.height = '200px';
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = 'white';
    popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    popup.style.zIndex = '1000';

    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.onclick = function() {
        document.body.removeChild(popup);
    };

    popup.appendChild(closeButton);
    document.body.appendChild(popup);
}

// Event handler to trigger the popup
document.addEventListener('DOMContentLoaded', function() {
    const triggerButton = document.createElement('button');
    triggerButton.innerText = 'Open Popup';
    triggerButton.onclick = openPopup;
    document.body.appendChild(triggerButton);
});