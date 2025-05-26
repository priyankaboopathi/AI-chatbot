document.addEventListener("DOMContentLoaded", ()=>{
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sentButton =document.getElementById("send-button");

    // SIMPLE RESPONSES FOR THE CHATBOT
    const botResponse = {
        hello: "Hello! How can i help you today?",
        hi: "Hi there! How can i assist you",
        "how are you": "I'm doing well, thank you! How about you?",
        "what can you do": 
        "I can answer simple questions and have basic conversation. try a",
        bye: "Goodbye! have a great day!",
        default: "I'm not sure I understand. could you try ask something else"
    };

    // function to add a message to the chat
    function addmessage(Message, isuser = false){
const messageDiv = document.createElement("div");
messageDiv.classList.add("message");
messageDiv.classList.add(isuser ? "user-message" : "bot-message");

const messageText = document.createElement("p");
messageText.textContent = Message;
messageDiv.appendChild(messageText);

chatMessages.appendChild(messageDiv);
chatMessages.scrollTop = chatMessages.scrollHeight;     ////scroll to the bottom of the page
    }


// function to get bot response
function getBotresponse(userMessage){
    const lowerMessage = userMessage.toLowerCase();

    for (const[key,value]of Object.entries(botResponse)){
        if (lowerMessage.includes(key)){
            return value;
        }
    }
    return botResponse.default;
}

// functions to handle sending messages
function sendMessage(){
    const message = userInput.value.trim();
    if (message){
        addmessage(message, true);
        userInput.value ="";

        // similate bot thinking
        setTimeout(()=>{
            const botResponse =  getBotresponse(message);
            addmessage(botResponse);
        }, 500);
    }
}

// event listerner
sentButton.addEventListener("click",sendMessage);
userInput.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        sendMessage();
    }
});

});
