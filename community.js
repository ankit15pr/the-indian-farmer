document.addEventListener('DOMContentLoaded', () => {
    const postButton = document.getElementById('post-button');
    const postContent = document.getElementById('post-content');
    const postList = document.getElementById('post-list');

    // Function to create a new post
    function createPost(content) {
        const postItem = document.createElement('div');
        postItem.classList.add('post-item');
        postItem.innerHTML = `<p>${content}</p>`;
        postList.appendChild(postItem);
    }

    // Event listener for the post button
    postButton.addEventListener('click', () => {
        const content = postContent.value.trim();
        if (content) {
            createPost(content);
            postContent.value = '';
        }
    });

    // Sample chat data
    const chatMessages = [
        { text: 'Hello everyone!', image: 'https://via.placeholder.com/40' },
        { text: 'How’s the harvest going?', image: 'https://via.placeholder.com/40' },
        { text: 'Just finished planting new crops.', image: 'https://via.placeholder.com/40' }
    ];

    const chatWindow = document.getElementById('chat-window');
    const chatMessageInput = document.getElementById('chat-message');
    const sendChatButton = document.getElementById('send-chat-button');

    // Function to create a new chat message
    function createChatMessage(text, image) {
        const chatMessage = document.createElement('div');
        chatMessage.classList.add('chat-message');
        chatMessage.innerHTML = `<img src="${image}" alt="User Image"><p>${text}</p>`;
        chatWindow.appendChild(chatMessage);
        chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
    }

    // Generate some random chat messages
    chatMessages.forEach(msg => createChatMessage(msg.text, msg.image));

    // Event listener for sending a chat message
    sendChatButton.addEventListener('click', () => {
        const message = chatMessageInput.value.trim();
        if (message) {
            createChatMessage(message, 'https://via.placeholder.com/40'); // Default image for new messages
            chatMessageInput.value = '';
        }
    });
});
