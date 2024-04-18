import React, { useState } from 'react';
import './Chatbot.scss';

interface Message {
    sender: 'user' | 'bot'
    id: number,
    text: string
}

function Chatbox() {
    const [messages, setMessages] = useState<Message[]>([{
        id: 0,
        sender: 'user',
        text: 'Who are you?'
    }, {
        id: 1,
        sender: 'bot',
        text: 'We are company letting LLM\'s burnout instead of people. We aim to optimize your customer service processes. If you want to know more proceed to rest of the page.'
    }]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault(); // Prevents the form from refreshing the page
        const trimmedInput = inputValue.trim();
        if (trimmedInput) {
            setMessages([...messages, { id: messages.length + 1, sender: 'user', text: trimmedInput }]);
            setInputValue(''); // Clear the input after sending
        }
    };

    return (
        <div className="Chatbox">
            <div className="messages">
                {messages.map((message) => (
                    <div key={message.id} className={`message ${message.sender}`}>
                        {message.text}
                    </div>
                )).reverse()}
            </div>
            <form onSubmit={handleSubmit} className="message-form">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="message-input"
                    placeholder="Type your message here..."
                />
                <button type="submit" className="send-button">Send</button>
            </form>
        </div>
    );
}

export default Chatbox;