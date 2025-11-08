import { useState } from 'react'
import { Chatbot } from  'supersimpledev'
import './ChatInput.css'

export function ChatInput({chatMessages, setChatMessages}){
          const [inputText , setInputText] = useState('');
          function saveInputText(event){
            setInputText(event.target.value);
          }
          function sendMessage(){

            const newChatMessages = ([
            ...chatMessages , //...spread operator
            {
                message: inputText,

                sender:'user',
                id:crypto.randomUUID()
            }
          ]);
            setChatMessages(newChatMessages)

          const response = Chatbot.getResponse(inputText);
          setChatMessages([
            ...newChatMessages , //...spread operator
            {
                message: response,
                sender:'robot',
                id:crypto.randomUUID()
            }
          ]);
          setInputText(' ');
          }
             function handleKeyDown(event){
            if (event.key === 'Enter'){
              sendMessage();
            }
            else if(event.key === 'Escape'){
              setInputText('')
            }
          }
            return (
                <div className = "chat-input-container">
                    <input
                    className ="chat-input"
                      placeholder="Send a message to Chatbot"
                      size="30"
                      onChange={saveInputText}
                      onKeyDown = {handleKeyDown}
                      value = {inputText}  //controlled input
                    />
                    <button className="send-button"onClick={sendMessage}>
                      Send
                    </button>
                </div>

            );

}