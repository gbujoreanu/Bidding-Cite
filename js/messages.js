// js/messages.js

// Placeholder for sending messages
const chatInput = document.querySelector('.chat-input input');
const sendButton = document.querySelector('.chat-input button');
const chatMessages = document.querySelector('.chat-messages');

sendButton.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageText = chatInput.value.trim();
    if (messageText !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sent');
        messageElement.innerHTML = `<p>${messageText}</p><span class="timestamp">${getCurrentTime()}</span>`;
        chatMessages.appendChild(messageElement);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Placeholder for loading conversations and messages
// In a real application, you would fetch this data from the server
