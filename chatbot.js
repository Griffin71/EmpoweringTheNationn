// script.js

document.addEventListener('DOMContentLoaded', () => {
    const chatbot = document.getElementById('chatbot');
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const input = document.getElementById('input');
    const sendButton = document.getElementById('send-btn');
    const chatbox = document.getElementById('chatbox');

    const responses = {
        "hello": "Hi there! How can I help you today?",
		"hey": "Hi there! How can I help you today?",
		"hello AI": "Hi there! How can I help you today?",
		"Hello AI": "Hi there! How can I help you today?",
		"Hey AI": "Hi there! How can I help you today?",		
        "hi": "Hello there! How can I help you today?",
        "how are you": "I'm just a bot, but I'm here to assist you!",
        "hows you": "I'm just a bot, but I'm here to assist you!",
        "what is this website": "This is a website for Empowering the Nation.",
        "what's this website": "This is a website for Empowering the Nation.",
        "bro": "Wassup bro?",
        "nothing much and you": "Just here to help you big bro!",
        "who is your creator": "I have three creators: Kabelo, Omphemetse, and Vanessa. The AI was built by Kabelo and the designs where made by Omphemetse and Vanessa for a school project. :)",
		"who is your creator": "I have three creators: Kabelo, Omphemetse, and Vanessa. The AI was built by Kabelo and the designs where made by Omphemetse and Vanessa for a school project. :)",
		"who's your creator": "I have three creators: Kabelo, Omphemetse, and Vanessa. The AI was built by Kabelo and the designs where made by Omphemetse and Vanessa for a school project. :)",
		"Who is your creator?": "I have three creators: Kabelo, Omphemetse, and Vanessa. The AI was built by Kabelo and the designs where made by Omphemetse and Vanessa for a school project. :)",
        "who are your creators": "I have three creators: Kabelo, Omphemetse, and Vanessa. The AI was built by Kabelo and the designs where made by Omphemetse and Vanessa for a school project. :)",
        "smile": ":)",
        "Smile": ":)",
        "Frown": ":(",
        "Be sad": ":(",
        "wink": ";)",
        "bye": "Good-bye",
        "How do I navigate the system?": "What do you require?",
        "I need help": "What do you require?",
         "i need help": "What do you require?",
         "help": "What do you require?",
        "discount information": "Enroll in multiple courses and get discounts, 2 courses: 10% off 3 courses: 15% off 4 or more courses: 20% off",
        " Discount Information": "Enroll in multiple courses and get discounts, 2 courses: 10% off 3 courses: 15% off 4 or more courses: 20% off",
        "Thanks": "My pleasure.",
        "Thank you": "My pleasure.",
        "Tnx": "My pleasure.",
        "Thnx": "My pleasure.",
        "Dankie": "My pleasure.",
        "Bye": "Good-bye.",
        "Later": "Good-bye.",
        "Goodnight": "Goodnight.",
        "morning": "Goodmorning.",
        "default": "Sorry, I don't understand that. Can you ask something else?"
    };

    function getResponse(input) {
        // Normalize the input: make lowercase and remove punctuation
        input = input.toLowerCase().replace(/[\?\!\.]/g, '');

        // Return the matching response or the default response
        return responses[input] || responses["default"];
    }

    function sendMessage(message) {
        chatbox.innerHTML += `<div>User: ${message}</div>`;
        const response = getResponse(message); // Use the getResponse function
        chatbox.innerHTML += `<div>Bot: ${response}</div>`;
        chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll to the bottom
    }

    chatbotToggle.addEventListener('click', () => {
        chatbot.classList.toggle('hidden');
    });

    sendButton.addEventListener('click', () => {
        const message = input.value.trim();
        if (message) {
            sendMessage(message);
            input.value = ''; // Clear input field
        }
    });

    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendButton.click();
        }
    });
});
